import React from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal'
import usePageTitle from '../../hooks/usePageTitle'

const services = [
  {
    id: 1,
    icon: '🎬',
    title: 'Video Editing',
    description: 'Professional video editing with clean cuts, smooth transitions, dynamic pacing, and storytelling that keeps viewers watching until the end.',
    features: ['Jump-cut & montage editing', 'Multi-camera editing', 'Audio sync & mixing', 'Subtitles & captions'],
  },
  {
    id: 2,
    icon: '✨',
    title: 'Motion Graphics',
    description: 'Eye-catching motion graphics, animated titles, lower thirds, intros, outros, and visual effects that elevate your content.',
    features: ['Animated intros & outros', 'Lower thirds & titles', 'Logo animations', 'Infographic animations'],
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Color Grading',
    description: 'Cinematic color correction and grading that gives your video a professional, polished look and consistent visual identity.',
    features: ['Color correction', 'Cinematic LUT application', 'Skin tone matching', 'Mood-based grading'],
  },
  {
    id: 4,
    icon: '📱',
    title: 'Social Media Content',
    description: 'High-retention reels, shorts, and social media videos optimized for engagement on Instagram, TikTok, YouTube, and more.',
    features: ['Instagram Reels', 'TikTok videos', 'YouTube Shorts', 'Platform-optimized formats'],
  },
  {
    id: 5,
    icon: '🎙️',
    title: 'Podcast Editing',
    description: 'Full podcast post-production including audio cleanup, visual highlights, clip creation, and platform-ready exports.',
    features: ['Audio cleanup & enhancement', 'Video podcast editing', 'Highlight clips for social', 'Thumbnail creation'],
  },
  {
    id: 6,
    icon: '🎧',
    title: 'Sound Design',
    description: 'Professional audio enhancement with background music, sound effects, voice-over sync, and audio mixing for a complete experience.',
    features: ['Background music selection', 'Sound effects & foley', 'Voice-over sync', 'Audio mixing & mastering'],
  },
  {
    id: 7,
    icon: '🎥',
    title: 'Commercial Videos',
    description: 'Premium commercial and promotional video editing designed to showcase products, services, and brands in the best light.',
    features: ['Product showcase videos', 'Brand story films', 'Promotional content', 'Ad-ready formats'],
  },
  {
    id: 8,
    icon: '📊',
    title: 'YouTube Optimization',
    description: 'Complete YouTube content editing with attention-grabbing hooks, thumbnails, cards, and end screens to maximize growth.',
    features: ['Hook-driven openings', 'Retention-focused editing', 'Thumbnail design', 'SEO-optimized descriptions'],
  },
]

function Services() {
  usePageTitle('Services')

  const heroRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const pricingRef = useScrollReveal()
  const faqRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-20">
        <div className="absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-green-600/8 blur-[150px]" />

        <div ref={heroRef} className="fade-in-up relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-green-500">
            Our Services
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
            Everything you need
            <span className="block text-gray-500">to stand out.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            From raw footage to final delivery, we provide end-to-end video
            editing and post-production services that help brands and creators
            produce content that gets attention.
          </p>
        </div>
      </section>


      {/* ================= SERVICES GRID ================= */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div ref={gridRef} className="fade-in-up mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl border border-white/10 bg-[#111] p-8 transition-all duration-300 hover:border-green-600/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-600/5 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{service.icon}</span>
                  <span className="text-sm font-bold text-white/10 group-hover:text-green-600/30 transition">
                    {String(service.id).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= PRICING ================= */}
      <section className="bg-[#111] px-6 py-24 md:px-12 lg:px-20">
        <div ref={pricingRef} className="fade-in-up mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
              Pricing
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-gray-400">
              Choose a package that fits your needs, or contact us for a custom quote.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: 'Custom',
                desc: 'Perfect for short-form content and social media videos.',
                features: ['Short-form editing', 'Basic color correction', 'Music & SFX', '1 revision round', '3-day delivery'],
                highlight: false,
              },
              {
                name: 'Professional',
                price: 'Custom',
                desc: 'Ideal for YouTube videos, podcasts, and branded content.',
                features: ['Long-form editing', 'Motion graphics', 'Color grading', 'Sound design', '3 revision rounds', 'Priority delivery'],
                highlight: true,
              },
              {
                name: 'Premium',
                price: 'Custom',
                desc: 'For cinematic projects, commercials, and complete production.',
                features: ['Cinematic editing', 'Advanced VFX', 'Custom animations', 'Full sound design', 'Unlimited revisions', 'Dedicated editor'],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? 'border-green-600/50 bg-green-600/5 shadow-lg shadow-green-600/10'
                    : 'border-white/10 bg-[#0b0b0b]'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-xs font-bold text-black">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-3xl font-bold text-green-500">{plan.price}</p>
                <p className="mt-3 text-sm text-gray-400">{plan.desc}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 block w-full rounded-lg py-3 text-center font-semibold transition ${
                    plan.highlight
                      ? 'bg-green-600 text-black hover:bg-green-500'
                      : 'border border-white/20 text-white hover:border-green-600 hover:text-green-500'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= FAQ ================= */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div ref={faqRef} className="fade-in-up mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
              FAQ
            </p>
            <h2 className="mt-3 text-4xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: 'What types of videos do you edit?',
                a: 'We edit YouTube videos, social media reels, commercials, podcasts, cinematic films, brand content, and more. If it involves video, we can edit it.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'Turnaround depends on the project scope. Short-form content takes 2-3 days, while longer projects may take 5-7 days. Rush delivery is available.',
              },
              {
                q: 'How many revisions do I get?',
                a: 'Our Starter package includes 1 round of revisions, Professional includes 3 rounds, and Premium includes unlimited revisions until you\'re 100% satisfied.',
              },
              {
                q: 'What formats do you deliver in?',
                a: 'We deliver in any format you need — MP4, MOV, ProRes, and platform-optimized exports for YouTube, Instagram, TikTok, etc.',
              },
              {
                q: 'How do I send my footage?',
                a: 'You can share footage via Google Drive, Dropbox, WeTransfer, or any cloud storage service. We\'ll guide you through the process.',
              },
            ].map((faq, i) => (
              <details key={i} className="group rounded-xl border border-white/10 bg-[#111] transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold">
                  {faq.q}
                  <span className="ml-4 text-green-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-white/10 px-6 pb-6 pt-4 text-sm leading-7 text-gray-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-24">
        <div ref={ctaRef} className="fade-in-up mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-500 px-8 py-20 text-center sm:px-16 relative">

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-black/10" />
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-black/10" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/60">
              Ready to get started?
            </p>

            <h2 className="mt-4 text-4xl font-bold text-black sm:text-5xl">
              Let's Bring Your Vision to Life.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-black/60 text-lg">
              Tell us about your project and we'll create a custom plan tailored to your needs.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#171717] hover:scale-105"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services