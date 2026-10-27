import emailjs from '@emailjs/browser'
import { EMAILJS } from '@/config/site'

export function sendMessage({ name, email, message }) {
  return emailjs.send(EMAILJS.service, EMAILJS.template,
    { name, email, message, reply_to: email },
    { publicKey: EMAILJS.publicKey, limitRate: { throttle: 10000 } })
}
