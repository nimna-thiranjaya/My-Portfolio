import emailjs from '@emailjs/browser'
import { EMAILJS } from '@/config/site'

export function sendMessage({ name, email, message }) {
  return emailjs.send(EMAILJS.service, EMAILJS.template,
    { user_name: name, user_email: email, message },
    { publicKey: EMAILJS.publicKey, limitRate: { throttle: 10000 } })
}
