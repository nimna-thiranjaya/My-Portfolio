// Fire-and-forget toasts: call toast('text') from anywhere; <Toaster /> renders them.
export const TOAST_EVENT = 'toast'
export const toast = msg => dispatchEvent(new CustomEvent(TOAST_EVENT, { detail: msg }))

export const copyText = (text, label) =>
  (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
    .then(() => toast(`✓ ${label} copied`), () => toast(`✕ couldn't copy — ${text}`))
