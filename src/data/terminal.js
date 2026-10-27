import { profile, socials } from './profile'
import { experience } from './experience'
import { education, publications } from './education'
import { projects } from './projects'
import { skills } from './skills'

// Canned answers for the hero terminal. Matched by keyword, first hit wins.
export const answers = [
  { keys: ['stack', 'tech', 'skill', 'language'], text: () => `backend: ${skills.backend.join(', ')}\narchitecture: ${skills.architecture.join(', ')}\ndata: ${skills.data.join(', ')}` },
  { keys: ['hire', 'available', 'freelance', 'job'], text: () => `yes — open to backend / full-stack roles and freelance work.\nreach me at ${profile.email}` },
  { keys: ['project', 'recent', 'built'], text: () => `${projects[0].name} (${projects[0].org}):\n${projects[0].desc}\nusers: ${projects[0].users}\n[${projects[0].tags.join(' · ')}]` },
  { keys: ['study', 'education', 'degree', 'university', 'school'], text: () => education.map(e => `${e.period}  ${e.school} — ${e.degree}`).join('\n') + `\n\nDean's List Award 2023–2024 at SLIIT` },
  { keys: ['publication', 'research', 'paper', 'journal'], text: () => publications.map(p => `${p.title}\n${p.venue}, ${p.date}\n${p.link}`).join('\n\n') },
  { keys: ['experience', 'company', 'where', 'work'], text: () => experience.map(e => `${e.period}  ${e.role} @ ${e.company}`).join('\n') },
  { keys: ['contact', 'email', 'reach'], text: () => `email: ${profile.email}\nphone: ${profile.phone}\n` + socials.map(s => `${s.label.toLowerCase()}: ${s.url}`).join('\n') },
  { keys: ['who', 'about', 'you'], text: () => profile.about[0] },
]

export const suggestions = ['what is your stack?', 'are you available for hire?', 'tell me about a recent project', 'where have you worked?', 'where did you study?']
