// Pointer handlers shared by cards and buttons. Spread the *Props objects onto an element.

// 3D tilt + spotlight position (--x/--y) for .tilt cards.
function tilt(e) {
  const el = e.currentTarget, r = el.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height
  el.style.setProperty('--x', `${x * 100}%`)
  el.style.setProperty('--y', `${y * 100}%`)
  el.style.setProperty('--rx', `${(0.5 - y) * 5}deg`)
  el.style.setProperty('--ry', `${(x - 0.5) * 5}deg`)
}
function untilt(e) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}
export const tiltProps = { onMouseMove: tilt, onMouseLeave: untilt }

// Element drifts a little toward the cursor.
function magnet(e) {
  const el = e.currentTarget, r = el.getBoundingClientRect()
  el.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.2}px ${(e.clientY - r.top - r.height / 2) * 0.3}px`
}
function unmagnet(e) { e.currentTarget.style.translate = '' }
export const magnetProps = { onMouseMove: magnet, onMouseLeave: unmagnet }
