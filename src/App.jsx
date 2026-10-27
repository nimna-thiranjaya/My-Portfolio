import { useState } from 'react'
import { NAV } from '@/config/site'
import { useBoot } from '@/hooks/useBoot'
import { useCursorGlow } from '@/hooks/useCursorGlow'
import { usePaletteHotkeys } from '@/hooks/useHotkeys'
import { useReveal } from '@/hooks/useReveal'
import { useScrollState } from '@/hooks/useScrollState'
import { useTheme } from '@/hooks/useTheme'
import Boot from '@/components/effects/Boot'
import DotField from '@/components/effects/DotField'
import Toaster from '@/components/effects/Toaster'
import CommandPalette from '@/components/layout/CommandPalette'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ToTop from '@/components/layout/ToTop'
import { paletteActions } from '@/components/layout/paletteActions'
import Hero from '@/sections/Hero/Hero'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects/Projects'
import Skills from '@/sections/Skills'
import Education from '@/sections/Education'
import Contact from '@/sections/Contact/Contact'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [booting, bootDone] = useBoot()
  const [palette, setPalette] = useState(false)
  const active = useScrollState(NAV)
  useReveal()
  useCursorGlow()
  usePaletteHotkeys(() => setPalette(p => !p), () => setPalette(true))

  const openPalette = () => setPalette(true)

  return (
    <>
      <a href="#about" className="skip-link">skip to content</a>
      {booting && <Boot onDone={bootDone} />}
      <DotField theme={theme} />
      <Header active={active} theme={theme} onToggleTheme={toggleTheme} onOpenPalette={openPalette} />
      <main>
        <Hero ready={!booting} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer onOpenPalette={openPalette} />
      <ToTop />
      <Toaster />
      {palette && <CommandPalette actions={paletteActions({ theme, onToggleTheme: toggleTheme })} onClose={() => setPalette(false)} />}
    </>
  )
}
