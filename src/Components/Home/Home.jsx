import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#0b0b0b] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/img/hero-bg.jpg"
            alt=""
            className="h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
              Creative Video Editor
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              We Turn Your
              <span className="block text-green-600">
                Ideas Into Stories.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Professional video editing, motion graphics, color grading,
              and visual storytelling designed to make your content stand out.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/portfolio"
                className="rounded-full bg-green-600 px-7 py-3.5 font-semibold transition hover:bg-green-600"
              >
                View Our Work
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-7 py-3.5 font-semibold transition hover:border-green-600 hover:text-green-600"
              >
                Let's Work Together
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative">

            <img
              src="/img/about.jpg"
              alt="GURU EDITORS"
              className="w-full rounded-2xl object-cover"
            />

            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-green-600 px-8 py-6 sm:block">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Creative Services</p>
            </div>

          </div>

          {/* Text */}
          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
              About Us
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Creativity That
              <span className="text-green-600"> Connects.</span>
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

            <Link
              to="/about"
              className="mt-7 inline-block font-semibold text-green-600 transition hover:text-green-400"
            >
              Discover More →
            </Link>

          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="bg-[#111111] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
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


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Video Editing",
                text: "Professional editing that keeps your audience engaged from start to finish."
              },
              {
                number: "02",
                title: "Motion Graphics",
                text: "Dynamic animations and graphics that bring your ideas to life."
              },
              {
                number: "03",
                title: "Color Grading",
                text: "Cinematic color correction and grading for a polished visual style."
              },
              {
                number: "04",
                title: "Social Media",
                text: "High-retention reels and short-form content built for social platforms."
              }
            ].map((service) => (

              <div
                key={service.number}
                className="group rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition duration-300 hover:-translate-y-2 hover:border-green-600/50"
              >

                <span className="text-sm font-bold text-green-600">
                  {service.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {service.text}
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-block text-sm font-semibold text-white transition group-hover:text-green-600"
                >
                  Learn More →
                </Link>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= PORTFOLIO ================= */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
                Selected Work
              </p>

              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                Featured Projects
              </h2>

            </div>

            <Link
              to="/portfolio"
              className="font-semibold text-green-600"
            >
              View All Projects →
            </Link>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {[
              "/img/project-1.jpg",
              "/img/project-2.jpg",
              "/img/project-3.jpg",
              "/img/project-4.jpg"
            ].map((image, index) => (

              <Link
                to="/portfolio"
                key={image}
                className="group relative overflow-hidden rounded-2xl"
              >

                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-sm text-green-600">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    Creative Video Project
                  </h3>
                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-green-600 px-8 py-16 text-center sm:px-16">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/70">
            Have a Project?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-black sm:text-5xl">
            Let's Create Something Amazing.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-black/70">
            Tell us about your project and let's turn your vision into
            powerful visual content.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-[#171717]"
          >
            Start a Project
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;