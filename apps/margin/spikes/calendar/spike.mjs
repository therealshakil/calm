// Spike — the proof. A cold run, no interactive login:
//   stored refresh token → fresh access token → this week's Calendar → Signal[].
// Success = real events print as normalised Signals, and nothing leaves the you↔Google path.
//
// This is the risky bit the spike exists to de-risk (offline refresh + the SourceAdapter shape).
// The Cloudflare Worker wrapper around it is known platform boilerplate — ported on green-light.
//
// Needs: Node 18+ (native fetch), and .dev.vars with CLIENT_ID/SECRET + a REFRESH_TOKEN
// (mint the refresh token once via get-token.mjs).

import { readFileSync } from 'node:fs'

function loadVars() {
  const out = {}
  try {
    for (const line of readFileSync(new URL('./.dev.vars', import.meta.url), 'utf8').split('\n')) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
      if (m) out[m[1]] = m[2].trim()
    }
  } catch { /* rely on process.env */ }
  return out
}
const env = { ...loadVars(), ...process.env }

// The shared helper the research names: getAccessToken(provider). Only google here (spike).
async function getAccessToken(provider) {
  if (provider !== 'google') throw new Error(`spike only implements google, not ${provider}`)
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      refresh_token: env.GOOGLE_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  })
  if (!res.ok) throw new Error(`token refresh failed: ${res.status} ${await res.text()}`)
  return (await res.json()).access_token
}

// The Calendar SourceAdapter: fetch(window) → Signal[]. Read-only; no write path exists.
async function fetchCalendar(window) {
  const token = await getAccessToken('google')
  const params = new URLSearchParams({
    timeMin: window.from.toISOString(),
    timeMax: window.to.toISOString(),
    singleEvents: 'true',
    orderBy: 'startTime',
    maxResults: '50',
  })
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?${params}`,
    { headers: { authorization: `Bearer ${token}` } },
  )
  if (!res.ok) throw new Error(`calendar fetch failed: ${res.status} ${await res.text()}`)
  const { items = [] } = await res.json()
  return items.map(toSignal)
}

// Normalise a Google event → the Signal shape from spec 003.
function toSignal(ev) {
  const start = ev.start?.dateTime || ev.start?.date
  return {
    source: 'google-calendar',
    kind: 'meeting',
    title: ev.summary || '(no title)',
    who: ev.organizer?.email || ev.creator?.email || null,
    when: start,
    link: ev.htmlLink,
    urgencyHints: {
      allDay: Boolean(ev.start?.date),
      attendees: (ev.attendees || []).length,
      responseStatus: (ev.attendees || []).find(a => a.self)?.responseStatus || null,
    },
    raw: ev,
  }
}

// --- run the spike over the next 7 days (the week's meetings; feeds the Forecast) ---
const now = new Date()
const week = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
const signals = await fetchCalendar({ from: now, to: week })

console.log(`\n${signals.length} calendar signal(s) for the next 7 days:\n`)
for (const s of signals) {
  console.log(`  · ${s.when}  ${s.title}  (${s.urgencyHints.attendees} attendee(s))`)
}
console.log('\n--- full Signal[] ---')
console.log(JSON.stringify(signals, null, 2))
