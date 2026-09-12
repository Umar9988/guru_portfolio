import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      number: "01",
      title: "Video Editing",
      description:
        "Professional editing that turns your raw footage into polished, engaging, and high-quality videos.",
      icon: "🎬",
    },
    {
      number: "02",
      title: "YouTube Videos",
      description:
        "Engaging YouTube editing with clean cuts, captions, transitions, sound design, and attention-grabbing visuals.",
      icon: "▶",
    },
    {
      number: "03",
      title: "Short-Form Content",
      description:
        "High-retention Reels, TikToks, and YouTube Shorts designed to grab attention within the first few seconds.",
      icon: "⚡",
    },
    {
      number: "04",
      title: "Social Media Videos",
      description:
        "Creative video content optimized for Instagram, Facebook, TikTok, and other social platforms.",
      icon: "📱",
    },
    {
      number: "05",
      title: "Motion Graphics",
      description:
        "Modern text animations, titles, graphics, and visual effects that make your content more professional.",
      icon: "✨",
    },
    {
      number: "06",
      title: "Color & Sound",
      description:
        "Professional color correction, color grading, audio cleanup, and sound enhancement for a polished final result.",
      icon: "🎧",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* ================= HERO ================= */}
      <section className="px-6 py-24 text-center md:px-12 lg:px-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-green-500">
          What We Do
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Professional Video Editing
          <span className="block text-green-500">
            That Makes Your Content Stand Out
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white md:text-lg">
          From long-form videos to short-form content, Guru Editors helps
          creators and businesses turn raw footage into engaging visual stories.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-3xl">{service.icon}</span>

                <span className="text-sm font-medium text-gray-600">
                  {service.number}
                </span>
              </div>

              <h2 className="mb-4 text-2xl font-semibold">
                {service.title}
              </h2>

              <p className="leading-7 text-gray-400">
                {service.description}
              </p>

              <div className="mt-8 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className=" border-white/10 bg-white/[0.02] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[3px] text-white">
              Our Process
            </p>

            <h2 className="text-3xl font-bold md:text-5xl text-green-500">
              Simple. Creative. Professional.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="text-sm text-gray-500">01</span>
              <h3 className="mt-3 text-xl font-semibold">Send Your Footage</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Share your raw footage, requirements, references, and creative
                direction with us.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-500">02</span>
              <h3 className="mt-3 text-xl font-semibold">We Edit</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Our editing process brings your footage together with clean
                cuts, visuals, sound, and motion.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-500">03</span>
              <h3 className="mt-3 text-xl font-semibold">Final Delivery</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Review the final video, request revisions, and receive a
                polished video ready to publish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-24" >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-green-600 px-8 py-16 text-center sm:px-16">
        <h2  className="text-3xl font-bold md:text-5xl text-black">
          Have a project in mind?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-black">
          Let's turn your footage into content that people want to watch.
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

export default Services;
