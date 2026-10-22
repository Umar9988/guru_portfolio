import React from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal'
import usePageTitle from '../../hooks/usePageTitle'
import useCountUp from '../../hooks/useCountUp'
import guruLogo from '../../assets/guru-logo.jpeg'

function StatItem({ end, suffix = '', label }) {
  const { count, ref } = useCountUp(end, 2000)
  return (
    <div ref={ref} className="text-center p-6 rounded-xl border border-white/10 bg-[#111]">
      <p className="text-3xl font-bold text-green-500 counter-number md:text-4xl">
        {count}{suffix}
      </p>
      <p className="mt-2 text-sm text-gray-400">{label}</p>
    </div>
  )
}

function About() {
  usePageTitle('About')

  const heroRef = useScrollReveal()
  const aboutRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const whyRef = useScrollReveal()
  const valuesRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0b0b0b]" />
        <div className="absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-green-600/8 blur-[150px]" />

        <div ref={heroRef} className="fade-in-up relative mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
              Est. 2020
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
            We Turn Ideas Into
            <span className="block gradient-text"> Visual Stories</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            GURU EDITORS is a professional video editing studio focused on
            creating engaging, high-quality videos that help brands,
            creators, and businesses stand out.
          </p>
        </div>
      </section>


      {/* ================= ABOUT CONTENT ================= */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div ref={aboutRef} className="fade-in-up mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={guruLogo}
                alt="GURU EDITORS video editing"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 md:-right-6 rounded-xl bg-green-500 px-6 py-5 shadow-xl">
              <p className="text-3xl font-bold text-black">100%</p>
              <p className="text-sm font-semibold text-black/70">Creative Focus</p>
            </div>

            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border-2 border-green-600/30 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500 mb-4">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              More Than Just Video Editing
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              At GURU EDITORS, we believe great editing is not just about
              cutting clips together. It's about creating a story that
              captures attention and keeps people watching.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              From social media content and YouTube videos to promotional
              videos and cinematic projects, we combine creativity,
              storytelling, sound design, and modern editing techniques to
              deliver content that makes an impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Professional Team</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Client Focused</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-600 px-7 py-3 font-semibold text-black transition hover:bg-green-500"
            >
              Work With Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div ref={statsRef} className="fade-in-up mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          <StatItem end={50} suffix="+" label="Brands Trusted" />
          <StatItem end={200} suffix="+" label="Projects Done" />
          <StatItem end={10} suffix="+" label="Services" />
          <StatItem end={3} suffix="+" label="Years Experience" />
        </div>
      </section>


      {/* ================= SERVICES / EXPERTISE ================= */}
      <section className="bg-[#111] px-6 py-24 md:px-12 lg:px-20">
        <div ref={servicesRef} className="fade-in-up mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500 mb-3">
              What We Do
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Our Expertise</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🎬', title: 'Video Editing', desc: 'Professional editing with clean cuts, transitions, pacing, and storytelling.' },
              { icon: '📱', title: 'Social Media', desc: 'Engaging short-form content designed for Instagram, TikTok, YouTube Shorts.' },
              { icon: '✨', title: 'Motion Graphics', desc: 'Dynamic graphics, text animations, and visual effects for your content.' },
              { icon: '🎧', title: 'Sound Design', desc: 'Music, sound effects, and audio enhancement for a polished production.' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-[#181818] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-600/40"
              >
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm leading-6 text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div ref={valuesRef} className="fade-in-up mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500 mb-3">
              Our Values
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">What Drives Us</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Creativity First',
                desc: 'Every project gets a unique editing style based on its audience, message, and goals. No templates.',
                icon: '💡',
              },
              {
                title: 'Attention to Detail',
                desc: 'We focus on pacing, visuals, audio, color, and every small detail that makes a video feel professional.',
                icon: '🔍',
              },
              {
                title: 'Client Partnership',
                desc: 'We work closely with clients to understand their vision and deliver content that exceeds expectations.',
                icon: '🤝',
              },
            ].map((value, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-[#111] p-8 text-center transition-all duration-300 hover:border-green-600/30"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-600/10 text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-7">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= WHY US ================= */}
      <section className="bg-[#111] px-6 py-24 md:px-12 lg:px-20">
        <div ref={whyRef} className="fade-in-up mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500 mb-3">
              Why GURU EDITORS
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Why Clients Choose Us</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: 'Premium Quality', desc: 'Every video is crafted to the highest standard with cinematic editing techniques.' },
              { title: 'Fast Turnaround', desc: 'We respect deadlines and deliver projects on time, every time.' },
              { title: 'Unlimited Revisions', desc: 'We work until you\'re 100% satisfied with the final result.' },
              { title: 'Dedicated Support', desc: 'Direct communication with your editor throughout the entire project.' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 rounded-xl border border-white/10 bg-[#0b0b0b] p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/10 text-green-500 font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-24">
        <div ref={ctaRef} className="fade-in-up mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-500 px-8 py-20 text-center sm:px-16 relative">

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-black/10" />
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-black/10" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-black md:text-5xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-black/60 text-lg">
              Let's turn your footage into something people want to watch.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#171717] hover:scale-105"
            >
              Let's Work Together →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About