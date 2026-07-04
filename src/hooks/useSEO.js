import { useEffect } from 'react'
import { SITE } from '../data/routeMeta.js'

const DEFAULT_IMAGE = '/images/og-default.png'

export default function useSEO({ title, description, url, type = 'website', image = DEFAULT_IMAGE, noindex = false, jsonLd = null }) {
  const jsonLdStr = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    document.title = title

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', `${SITE}${url}`, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:site_name', 'PickemPlaybook.com', 'property')
    setMeta('og:image', `${SITE}${image}`, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', `${SITE}${image}`)
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE}${url}`)

    let script = document.getElementById('seo-jsonld')
    if (jsonLdStr) {
      if (!script) {
        script = document.createElement('script')
        script.id = 'seo-jsonld'
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = jsonLdStr
    } else if (script) {
      script.remove()
    }
    // no cleanup on unmount: the next route's useSEO overwrites everything,
    // and resetting to defaults mid-navigation caused stale-title flashes
  }, [title, description, url, type, image, noindex, jsonLdStr])
}
