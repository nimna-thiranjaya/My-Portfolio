import { Section } from '@/components/ui'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <Section id="contact" n={6} cmd="./contact.sh" title="get in touch">
      <div className="contact">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  )
}
