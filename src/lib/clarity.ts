declare global {
  interface Window {
    clarity: {
      (command: string, ...args: unknown[]): void
      q?: unknown[][]
    }
  }
}

const CLARITY_ID = 'y2cv3l91xx'

export function initClarity() {
  if (typeof window === 'undefined') return
  const hostname = window.location.hostname
  if (hostname === 'localhost' || hostname === '127.0.0.1') return

  window.clarity = window.clarity || function () {
    const q = (window.clarity.q = window.clarity.q || [])
    q.push(Array.from(arguments) as unknown[])
  }
  const t = document.createElement('script')
  t.async = true
  t.src = 'https://www.clarity.ms/tag/' + CLARITY_ID
  const y = document.getElementsByTagName('script')[0]
  y?.parentNode?.insertBefore(t, y)
}