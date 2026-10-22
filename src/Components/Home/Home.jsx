import React from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal'
import usePageTitle from '../../hooks/usePageTitle'
import useCountUp from '../../hooks/useCountUp'
import guruLogo from '../../assets/guru-logo.jpeg'

// FIX: Importing videos directly so they actually load
import guruVideo1 from '../../assets/video/proj-1.mp4'
import guruVideo2 from '../../assets/video/proj-2.mp4'
import guruVideo3 from '../../assets/video/proj-3.mp4'
import guruVideo4 from '../../assets/video/proj-4.mp4'

function StatCard({ end, suffix = '', label }) {
  const { count, ref } = useCountUp(end, 2000)
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-green-500 counter-number md:text-5xl">
        {count}{suffix}
      </p>
      <p className="mt-2 text-sm text-gray-400">{label}</p>
    </div>
  )
}

function Home() {
  usePageTitle('')

  const aboutRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const portfolioRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const testimonialsRef = useScrollReveal()
  const processRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <div className="bg-[#0b0b0b] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-80"
          >
            <source src={guruVideo1} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
          <div className="max-w-4xl stagger-children visible">

            {/* Layout adjustment and animations applied to Text */}
            <h1 className="text-[3.5rem] font-bold leading-[1.15] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              <span className="block">We turn your</span>
              <span className="mt-2 inline-block gradient-text transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                ideas into stories.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Professional video editing, motion graphics, color grading,
              and visual storytelling designed to make your content
              impossible to scroll past.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-green-600/25 hover:scale-105"
              >
                View Our Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-8 py-4 font-semibold transition-all duration-300 hover:border-green-500 hover:text-green-500 hover:bg-green-500/5"
              >
                Let's Work Together
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-14 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-xs text-gray-500">Brands Trusted</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold">200+</p>
                <p className="text-xs text-gray-500">Projects Delivered</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-gray-500">Client Satisfaction</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="border-y border-white/10 bg-[#0a0a0a] py-16">
        <div ref={statsRef} className="fade-in-up mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          <StatCard end={50} suffix="+" label="Brands Trusted" />
          <StatCard end={200} suffix="+" label="Projects Completed" />
          <StatCard end={10} suffix="+" label="Creative Services" />
          <StatCard end={98} suffix="%" label="Client Satisfaction" />
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="py-24 lg:py-32">
        <div ref={aboutRef} className="fade-in-up mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={guruLogo}
                alt="GURU EDITORS"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-green-600 px-8 py-6 shadow-2xl sm:block">
              <p className="text-3xl font-bold text-black">10+</p>
              <p className="text-sm font-semibold text-black/70">Creative Services</p>
            </div>

            {/* Decorative */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border-2 border-green-600/30 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
              About Us
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Creativity That
              <span className="gradient-text"> Connects.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              At GURU EDITORS, we believe great editing is more than
              cutting clips together. It's about creating emotion,
              maintaining attention, and telling a story people remember.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              From YouTube content and social media reels to commercial
              videos and cinematic projects, we help transform raw footage
              into polished visual experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Unlimited Revisions</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Premium Quality</span>
              </div>
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-green-500 transition hover:text-green-400"
            >
              Discover More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="bg-[#111111] py-24 lg:py-32">
        <div ref={servicesRef} className="fade-in-up mx-auto max-w-7xl px-6">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
                What We Do
              </p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                Our Creative Services
              </h2>
              <p className="mt-5 leading-7 text-gray-400">
                Everything you need to turn your footage into professional,
                engaging content.
              </p>
            </div>

            <Link
              to="/services"
              className="font-semibold text-green-500 transition hover:text-green-400 whitespace-nowrap"
            >
              All Services →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                icon: '🎬',
                title: 'Video Editing',
                text: 'Professional editing that keeps your audience engaged from start to finish.',
              },
              {
                number: '02',
                icon: '✨',
                title: 'Motion Graphics',
                text: 'Dynamic animations and graphics that bring your ideas to life.',
              },
              {
                number: '03',
                icon: '🎨',
                title: 'Color Grading',
                text: 'Cinematic color correction and grading for a polished visual style.',
              },
              {
                number: '04',
                icon: '📱',
                title: 'Social Media',
                text: 'High-retention reels and short-form content built for social platforms.',
              },
            ].map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-600/50 hover:shadow-lg hover:shadow-green-600/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-sm font-bold text-green-600/40 group-hover:text-green-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {service.text}
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white transition group-hover:text-green-500"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="py-24 lg:py-32">
        <div ref={processRef} className="fade-in-up mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
              How We Work
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Simple 4-Step Process
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-gray-400">
              From concept to delivery, we make the editing process smooth and efficient.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Brief', desc: 'Share your vision, footage, and project requirements with us.' },
              { step: '02', title: 'Edit', desc: 'Our team crafts your video with professional editing and effects.' },
              { step: '03', title: 'Review', desc: 'You review the draft and request any changes or adjustments.' },
              { step: '04', title: 'Deliver', desc: 'Final polished video delivered in your preferred format.' },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                {/* Connector line */}
                {i < 3 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-green-600/50 to-transparent lg:block" />
                )}

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600/10 text-xl font-bold text-green-500 border border-green-600/20">
                  {item.step}
                </div>

                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= PORTFOLIO ================= */}
      <section className="bg-[#111111] py-24 lg:py-32">
        <div ref={portfolioRef} className="fade-in-up mx-auto max-w-7xl px-6">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
                Selected Work
              </p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                Featured Projects
              </h2>
            </div>

            <Link to="/portfolio" className="font-semibold text-green-500 transition hover:text-green-400">
              View All Projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* FIX: Using the directly imported videos array here */}
            {[guruVideo1, guruVideo2, guruVideo3, guruVideo4].map(
              (video, index) => (
                <Link
                  to="/portfolio"
                  key={index}
                  className="video-card group relative overflow-hidden rounded-2xl border border-white/10"
                >
                  <video
                    src={video}
                    loop
                    muted
                    playsInline
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play button */}
                  <div className="play-btn absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-2xl transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-500">
                      Project {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold">
                      Creative Video Project
                    </h3>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 lg:py-32">
        <div ref={testimonialsRef} className="fade-in-up mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
              Testimonials
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              What Clients Say
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Alex Rivera',
                role: 'YouTube Creator',
                text: 'GURU EDITORS transformed my channel. The editing quality, pacing, and attention to detail is unmatched. My watch time increased by 40% after working with them.',
              },
              {
                name: 'Sarah Chen',
                role: 'Brand Manager',
                text: "Professional, creative, and incredibly fast. They understood our brand vision and delivered content that exceeded our expectations. Highly recommended!",
              },
              {
                name: 'Marcus Johnson',
                role: 'Content Creator',
                text: "The team at GURU EDITORS doesn't just edit videos — they craft experiences. Every project comes back looking cinematic and polished.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-[#111] p-8 transition-all duration-300 hover:border-green-600/30"
              >
                {/* Stars */}
                <div className="flex gap-1 text-green-500">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-300">
                  "{testimonial.text}"
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-black">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-24">
        <div ref={ctaRef} className="fade-in-up mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-500 px-8 py-20 text-center sm:px-16 relative">

          {/* Decorative circles */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-black/10" />
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-black/10" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/60">
              Have a Project?
            </p>

            <h2 className="mt-4 text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
              Let's Create Something Amazing.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-black/60 text-lg">
              Tell us about your project and let's turn your vision into
              powerful visual content.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#171717] hover:scale-105 hover:shadow-2xl"
            >
              Start a Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home