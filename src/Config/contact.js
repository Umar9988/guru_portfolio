// ============================================================
// GURU EDITORS — CONTACT & SOCIAL CONFIGURATION
// ============================================================

export const CONTACT = {
  email: 'guru.editors@gmail.com',
  whatsappNumber: '923010424240',
  whatsappDefaultMessage: "Hi Guru Editors 👋 I'd like to discuss a video editing project.",
  web3formsAccessKey: '8a2a1eb4-3dce-4fbb-ad0b-cf694a7dee36',

  // YOUR SOCIAL MEDIA & PLATFORM LINKS (Replace with your real profile links)
  socials: {
    instagram: 'https://instagram.com/guru.editors', // ← Replace
    youtube: 'https://youtube.com/@gurueditors',     // ← Replace
    fiverr: 'https://fiverr.com/guru_editors',       // ← Replace
    facebook: 'https://facebook.com/gurueditors',    // ← Replace
  },
}

// Helpers
export function getWhatsAppLink(customMessage) {
  const text = encodeURIComponent(customMessage || CONTACT.whatsappDefaultMessage)
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`
}

export function getMailtoLink(subject = 'Project Inquiry') {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`
}