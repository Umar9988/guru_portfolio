// ============================================================
// GURU EDITORS — CONTACT CONFIGURATION
// ============================================================

export const CONTACT = {
  // Your official email where form submissions will arrive
  email: 'guru.editors@gmail.com',

  // Your WhatsApp number (formatted without + or spaces)
  whatsappNumber: '923010424240',

  // Default pre-filled message when someone clicks WhatsApp
  whatsappDefaultMessage:
    "Hi Guru Editors 👋 I'd like to discuss a video editing project.",

  // Get your free key in 30 seconds at https://web3forms.com
  // 1. Enter guru.editors@gmail.com at web3forms.com
  // 2. Check your email for the key
  // 3. Replace the text below with your key
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
}

// Helpers (do not edit below)
export function getWhatsAppLink(customMessage) {
  const text = encodeURIComponent(
    customMessage || CONTACT.whatsappDefaultMessage
  )
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`
}

export function getMailtoLink(subject = 'Project Inquiry') {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`
}