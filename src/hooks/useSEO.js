import { useEffect } from 'react'

export default function useSEO({ title, description, url, type = 'website' }) {
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
    setMeta('og:url', `https://pickemplaybook.com${url}`, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:site_name', "PickemPlaybook.com", 'property')

    return () => {
      document.title = "2026 Pick'em Playbook"
    }
  }, [title, description, url, type])
}
