import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal'
import usePageTitle from '../../hooks/usePageTitle'
import { CONTACT, getWhatsAppLink, getMailtoLink } from '../../Config/contact'

function Contact() {
  usePageTitle('Contact')

  const heroRef = useScrollReveal()
  const formRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (submitError) setSubmitError('')
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Please describe your project'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ========== EMAIL INTEGRATION (Web3Forms) ==========
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: CONTACT.web3formsAccessKey,
          subject: `New Project Inquiry — ${formData.service || 'General'}`,
          from_name: 'GURU EDITORS Website',
          name: formData.name,
          email: formData.email, // reply-to
          service: formData.service,
          message: formData.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', service: '', message: '' })
        setTimeout(() => setSubmitted(false), 6000)
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try WhatsApp or email.')
      }
    } catch (err) {
      setSubmitError('Network error. Please try again or contact us on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  // WhatsApp message built from form (if filled) or default
  const openWhatsApp = () => {
    let msg = CONTACT.whatsappDefaultMessage
    if (formData.name || formData.service || formData.message) {
      msg = `Hi Guru Editors 👋\n\nName: ${formData.name || '—'}\nService: ${formData.service || '—'}\n\n${formData.message || 'I would like to discuss a project.'}`
    }
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 text-center md:px-12">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-green-600/8 blur-[150px]" />

        <div ref={heroRef} className="fade-in-up relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
              Available for Projects
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Let's Create Something
            <span className="gradient-text"> Amazing</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Have a video project in mind? Tell us about it — we'll reply within 24 hours.
          </p>
        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div ref={formRef} className="fade-in-up mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-bold">Let's Talk About Your Project</h2>

            <p className="mt-4 leading-7 text-gray-400">
              Whether you need YouTube editing, social media content,
              cinematic videos, reels, or professional post-production,
              Guru Editors is ready to help.
            </p>

            {/* Contact cards */}
            <div className="mt-10 space-y-4">

              {/* Email */}
              <a
                href={getMailtoLink('Project Inquiry from Website')}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#111] p-5 transition hover:border-green-600/40 hover:bg-[#141414]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-600/10 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="mt-1 text-sm text-gray-400">{CONTACT.email}</p>
                  <p className="mt-1 text-xs text-green-500">Click to open mail app →</p>
                </div>
              </a>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={openWhatsApp}
                className="flex w-full items-start gap-4 rounded-xl border border-white/10 bg-[#111] p-5 text-left transition hover:border-green-600/40 hover:bg-[#141414]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="mt-1 text-sm text-gray-400">Chat with us instantly</p>
                  <p className="mt-1 text-xs text-[#25D366]">Click to open WhatsApp →</p>
                </div>
              </button>

              {/* Response time */}
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#111] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-600/10 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="mt-1 text-sm text-gray-400">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="mt-8">
              <p className="mb-3 text-sm text-gray-500">Prefer a quick conversation?</p>
              <button
                type="button"
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-7 py-3 font-semibold text-black transition hover:bg-[#20bd5a] hover:scale-[1.02]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </button>
            </div>
            
            {/* ================= NEW SOCIAL LINKS WITH PNGS ================= */}
            <div className="mt-12">
              <p className="mb-4 text-sm text-gray-400">Connect with us on</p>
              <div className="flex gap-4">
                {[
                  { name: 'Instagram', url: CONTACT.socials?.instagram, icon: 'https://img.icons8.com/3d-fluency/94/instagram-new.png' },
                  { name: 'YouTube', url: CONTACT.socials?.youtube, icon: 'https://img.icons8.com/3d-fluency/94/youtube-play.png' },
                  { name: 'Fiverr', url: CONTACT.socials?.fiverr, icon: 'https://img.icons8.com/color/96/fiverr.png' },
                  { name: 'Facebook', url: CONTACT.socials?.facebook, icon: 'https://img.icons8.com/3d-fluency/94/facebook-circled.png' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="group flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#111] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:bg-[#1a1a1a] hover:shadow-lg hover:shadow-green-500/10"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110" 
                    />
                  </a>
                ))}
              </div>
            </div>
            {/* ================= END NEW SOCIAL LINKS ================= */}
            
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6 md:p-8">

            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center py-10">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-600/10 text-4xl text-green-500">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="mt-3 max-w-sm text-gray-400">
                  Thanks for reaching out. We'll get back to you within 24 hours at your email.
                </p>
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#20bd5a]"
                >
                  Or continue on WhatsApp
                </button>
              </div>
            ) : (
              <>
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full rounded-lg border bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-green-500 ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full rounded-lg border bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-green-500 ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-[#0b0b0b] px-4 py-3 outline-none transition focus:border-green-500 ${
                        errors.service ? 'border-red-500' : 'border-white/10'
                      } ${!formData.service ? 'text-gray-500' : 'text-white'}`}
                    >
                      <option value="">Select a service</option>
                      <option value="YouTube Video Editing">YouTube Video Editing</option>
                      <option value="Short Form / Reels">Short Form / Reels</option>
                      <option value="Cinematic Video Editing">Cinematic Video Editing</option>
                      <option value="Social Media Editing">Social Media Editing</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="Podcast Editing">Podcast Editing</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Tell Us About Your Project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Describe your project, timeline, and any specific requirements..."
                      className={`w-full resize-none rounded-lg border bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-green-500 ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  {submitError && (
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 font-bold text-black transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Or{' '}
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="text-[#25D366] underline-offset-2 hover:underline"
                    >
                      send via WhatsApp
                    </button>
                    {' '}· Messages go to {CONTACT.email}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t border-white/10 px-6 py-24">
        <div ref={ctaRef} className="fade-in-up mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to Bring Your Videos to Life?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Let's turn your raw footage into content that gets attention.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-black transition hover:bg-[#20bd5a] hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </button>

            <a
              href={getMailtoLink('Project Inquiry')}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-green-500 hover:text-green-500"
            >
              Email Us
            </a>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-green-500 hover:text-green-500"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact