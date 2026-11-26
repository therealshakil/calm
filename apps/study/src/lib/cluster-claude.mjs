// The real clusterImpl for v2 (spec 009), backed by the Claude Messages API.
// Native fetch, zero-dependency (study stays dep-free — Subtraction Ladder). Groups reading-list items
// by story across sources and flags GENUINE dissent only; it never ranks or hides. Returns
// { clusters: [{ links, note? }] }. Model is configurable (spec 009 open question); default opus.
//
// Auth: x-api-key from ANTHROPIC_API_KEY (Node) or a passed apiKey. Runs at build time, not live.

const ENDPOINT = 'https://api.anthropic.com/v1/messages'

// Structured output: the AI returns ONLY groupings + an optional note. `note` is omitted from
// `required`, so it is optional; agreement doesn't force a note (spec 009 R3 — no manufactured dissent).
const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['clusters'],
  properties: {
    clusters: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['links'],
        properties: {
          links: { type: 'array', items: { type: 'string' } },
          note: {
            type: 'object',
            additionalProperties: false,
            required: ['kind', 'text'],
            properties: {
              kind: { type: 'string', enum: ['consensus', 'dissent'] },
              text: { type: 'string' },
            },
          },
        },
      },
    },
  },
}

const INSTRUCTIONS = [
  'Group these reading-list items by STORY/TOPIC for a calm reading room.',
  'A cluster must contain at least 2 items from at least 2 DIFFERENT sources — same story, different voices.',
  'Leave everything else out; unclustered items are shown as-is. Do not cluster loosely-related items.',
  'For a cluster, add a `note` ONLY when the sources genuinely disagree: kind "dissent", <=160 chars,',
  'grounded strictly in the given items. If they simply agree on a real shared claim, you may add kind',
  '"consensus" (<=160 chars); otherwise omit `note`. Never invent a disagreement. Reference items by their',
  'exact `link` string.',
].join(' ')

/**
 * Build a clusterImpl bound to the Claude API.
 * @param {{apiKey?: string, model?: string, maxTokens?: number, fetchImpl?: Function}} [opts]
 */
export function claudeClusterer({
  apiKey = (typeof process !== 'undefined' ? process.env.ANTHROPIC_API_KEY : undefined),
  model = 'claude-opus-4-8',
  maxTokens = 4096,
  fetchImpl = fetch,
} = {}) {
  return async function cluster(signals) {
    if (!apiKey) throw new Error('cluster-claude: no ANTHROPIC_API_KEY')
    const items = signals.map((s) => ({ link: s.link, title: s.title, source: s.source, when: s.when }))
    const res = await fetchImpl(ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: maxTokens,
        output_config: { format: { type: 'json_schema', schema: SCHEMA } },
        messages: [{ role: 'user', content: `${INSTRUCTIONS}\n\nItems:\n${JSON.stringify(items)}` }],
      }),
    })
    if (!res.ok) throw new Error(`cluster-claude: HTTP ${res.status}`)
    const data = await res.json()
    const text = (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('')
    return JSON.parse(text) // { clusters: [...] } — validated by the API against SCHEMA
  }
}
