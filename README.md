# nimna.dev

Personal portfolio: React 19 + Vite, plain CSS, no UI library.

```bash
npm install
cp .env.example .env.local   # EmailJS keys for the contact form
npm run dev                  # http://localhost:5173
npm run build                # production build in dist/
npm run lint
```

## Editing content

All text lives in `src/data/`. You rarely need to touch components.

| File | What's in it |
| --- | --- |
| `profile.js` | name, intro, about, stats, contact details, social links |
| `experience.js` | work history (timeline) |
| `projects.js` | projects, their category (filter tab) and how many show before "show all" |
| `skills.js` | `stack.json` in the skills section and the hero marquee |
| `education.js` | degrees, awards, publications |
| `terminal.js` | canned answers for the hero `ask-me.sh` terminal |

## Structure

```
src/
  App.jsx               page composition + app-wide hooks
  config/site.js        section ids (nav), keyboard shortcut label, EmailJS keys
  data/                 content (see above)
  hooks/                reusable behaviour: scroll state, reveal, theme, typing, hotkeys…
  lib/                  plain helpers: links, toasts/clipboard, email, pointer interactions
  components/
    ui/                 reusable building blocks (import from '@/components/ui')
    effects/            visual effects: dot field, boot screen, scramble, count-up, marquee…
    layout/             header, footer, back-to-top, command palette
  sections/             one folder/file per page section
  styles/               tokens → base → ui → effects → layout → sections → responsive
```

`@/` is an alias for `src/` (see `vite.config.js`).

### UI components

| Component | Use |
| --- | --- |
| `Section` | page section with id, numbered terminal heading and container |
| `Card` | bordered surface; `tilt`, `beam`, `delay` (scroll-reveal stagger), `as` |
| `Reveal` | any element that fades in on scroll; `as`, `delay` |
| `Button` | `variant="primary"`, `magnetic`; renders a link when `href` is set |
| `IconButton` | icon-only button or link with an accessible `label` |
| `Link` | every link goes through it; off-site URLs open in a new tab |
| `Icon` | inline SVG icons (add new ones to `PATHS`) |
| `Tags`, `CategoryBadge` | tech pills (`max` collapses the rest), colored category label |
| `Dialog` | native modal `<dialog>`: mount to open, `onClose` to close |
| `WindowBar` | macOS-style title bar used by the terminal, editor and modal |
| `Field` | floating-label input/textarea; `max` on a textarea shows a counter |
| `SocialLinks` | row of social icon links |

Effects respect `prefers-reduced-motion`.
