/* Post-build prerender: renders every route to static HTML with full head tags.
   Runs after `vite build` (client) and `vite build --ssr` (server bundle). */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const { render, getRouteMeta, PRERENDER_ROUTES, SITE } = await import(
  pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href
)

const template = readFileSync(join(root, 'dist', 'index.html'), 'utf-8')
if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html')
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

for (const route of PRERENDER_ROUTES) {
  const meta = getRouteMeta(route)
  const appHtml = render(route)
  if (!appHtml || appHtml.length < 500) {
    throw new Error(`prerender: suspiciously small render for ${route} (${appHtml.length} chars)`)
  }
  const canonical = `${SITE}${meta.url}`
  const image = `${SITE}${meta.image || '/images/og-default.png'}`
  const head = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, nofollow' : 'index, follow'}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="${meta.type || 'website'}" />`,
    `<meta property="og:site_name" content="PickemPlaybook.com" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    meta.jsonLd
      ? `<script type="application/ld+json" id="seo-jsonld">${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>`
      : '',
  ].filter(Boolean).join('\n    ')

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/<meta name="description"[^>]*\/?>/, `<meta name="description" content="${esc(meta.description)}" />`)
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outPath = route === '/'
    ? join(root, 'dist', 'index.html')
    : join(root, 'dist', ...route.slice(1).split('/'), 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerendered ${route} -> ${appHtml.length} chars, title: ${meta.title.slice(0, 60)}`)
}
console.log(`prerender complete: ${PRERENDER_ROUTES.length} routes`)
