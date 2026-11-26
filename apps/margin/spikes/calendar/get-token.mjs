// Spike — one-time Google consent → refresh token.
// First-party, local: the consent redirect lands on your own machine (localhost),
// the code→token exchange is Worker↔Google direct. No third party ever sees the token.
// Run once; paste the printed refresh token into .dev.vars, then use spike.mjs.
//
// Needs: Node 18+ (native fetch), GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET in .dev.vars.

import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'

const PORT = 8788
const REDIRECT = `http://localhost:${PORT}/callback`
const SCOPE = 'https://www.googleapis.com/auth/calendar.readonly'

function loadVars() {
  const out = {}
  try {
    for (const line of readFileSync(new URL('./.dev.vars', import.meta.url), 'utf8').split('\n')) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
      if (m) out[m[1]] = m[2].trim()
    }
  } catch { /* no .dev.vars yet */ }
  return out
}

const env = { ...loadVars(), ...process.env }
const clientId = env.GOOGLE_CLIENT_ID
const clientSecret = env.GOOGLE_CLIENT_SECRET

if (!clientId || !clientSecret) {
  console.error('Missing GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET. Put them in .dev.vars first.')
  process.exit(1)
}

const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
authUrl.search = new URLSearchParams({
  client_id: clientId,
  redirect_uri: REDIRECT,
  response_type: 'code',
  scope: SCOPE,
  access_type: 'offline',   // ask for a refresh token
  prompt: 'consent',        // force it to be returned even on re-consent
}).toString()

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`)
  if (!url.pathname.startsWith('/callback')) { res.writeHead(404); res.end(); return }

  const code = url.searchParams.get('code')
  if (!code) { res.writeHead(400); res.end('No code'); return }

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: REDIRECT,
      grant_type: 'authorization_code',
    }),
  })
  const tok = await tokenRes.json()

  res.writeHead(200, { 'content-type': 'text/plain' })
  res.end('Done — you can close this tab and return to the terminal.')

  if (tok.refresh_token) {
    console.log('\nGOOGLE_REFRESH_TOKEN=' + tok.refresh_token)
    console.log('\nPaste that line into .dev.vars. That is the whole one-time step.\n')
  } else {
    console.log('\nNo refresh_token came back. Usually means consent was already granted before —')
    console.log('remove Margin from https://myaccount.google.com/permissions and run this again.\n')
    console.log('Raw response:', tok)
  }
  server.close()
})

server.listen(PORT, () => {
  console.log('\nOpen this URL in your browser and approve read-only Calendar access:\n')
  console.log(authUrl.toString())
  console.log(`\nWaiting for the redirect back to ${REDIRECT} ...\n`)
})
