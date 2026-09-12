import React from "react";
import { Link } from "react-router-dom";
import guruLogo from '../../assets/guru-logo.jpeg'

function About() {
  return (
    <div className="bg-[#0b0b0b] text-white">

      {/* ================= HERO ================= */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0b0b0b]" />

        <div className="relative max-w-6xl mx-auto text-center">
          {/* <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold mb-4">
            About Us
          </p> */}

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We Turn Ideas Into
            <span className="text-green-500"> Visual Stories</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
            GURU EDITORS is a professional video editing studio focused on
            creating engaging, high-quality videos that help brands,
            creators, and businesses stand out.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Image / Visual */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-[#171717] border border-white/10">
              <img
                src={guruLogo}
                alt="GURU EDITORS video editing"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-green-500 text-black px-6 py-5 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm font-semibold">Creative Focus</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-green-500 uppercase tracking-[3px] text-sm font-semibold mb-4">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than Just Video Editing
            </h2>

            <p className="text-gray-400 leading-8 mb-5">
              At GURU EDITORS, we believe great editing is not just about
              cutting clips together. It's about creating a story that
              captures attention and keeps people watching.
            </p>

            <p className="text-gray-400 leading-8 mb-8">
              From social media content and YouTube videos to promotional
              videos and cinematic projects, we combine creativity,
              storytelling, sound design, and modern editing techniques to
              deliver content that makes an impact.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-7 py-3 rounded-lg transition"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-green-500 uppercase tracking-[3px] text-sm font-semibold mb-3">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Our Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-[#181818] border border-white/10 p-7 rounded-xl hover:-translate-y-2 transition duration-300">
              <div className="text-green-500 text-3xl mb-5">🎬</div>
              <h3 className="text-xl font-semibold mb-3">
                Video Editing
              </h3>
              <p className="text-gray-400 text-sm leading-6">
                Professional editing with clean cuts, transitions,
                pacing, and storytelling.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#181818] border border-white/10 p-7 rounded-xl hover:-translate-y-2 transition duration-300">
              <div className="text-green-500 text-3xl mb-5">📱</div>
              <h3 className="text-xl font-semibold mb-3">
                Social Media
              </h3>
              <p className="text-gray-400 text-sm leading-6">
                Engaging short-form content designed for Instagram,
                TikTok, YouTube Shorts, and more.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#181818] border border-white/10 p-7 rounded-xl hover:-translate-y-2 transition duration-300">
              <div className="text-green-500 text-3xl mb-5">🎨</div>
              <h3 className="text-xl font-semibold mb-3">
                Motion Graphics
              </h3>
              <p className="text-gray-400 text-sm leading-6">
                Dynamic graphics, text animations, and visual effects
                that bring your content to life.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#181818] border border-white/10 p-7 rounded-xl hover:-translate-y-2 transition duration-300">
              <div className="text-green-500 text-3xl mb-5">🎧</div>
              <h3 className="text-xl font-semibold mb-3">
                Sound Design
              </h3>
              <p className="text-gray-400 text-sm leading-6">
                Music, sound effects, and audio enhancement for a
                polished final production.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-green-500 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Why GURU EDITORS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Why Clients Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="text-center p-8 rounded-xl border border-white/10 bg-[#111]">
              <h3 className="text-xl font-bold mb-3">
                Creative Approach
              </h3>
              <p className="text-gray-400 leading-7">
                Every project gets a unique editing style based on its
                audience, message, and goals.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl border border-white/10 bg-[#111]">
              <h3 className="text-xl font-bold mb-3">
                Attention to Detail
              </h3>
              <p className="text-gray-400 leading-7">
                We focus on pacing, visuals, audio, color, and every
                small detail that makes a video feel professional.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl border border-white/10 bg-[#111]">
              <h3 className="text-xl font-bold mb-3">
                Client Focused
              </h3>
              <p className="text-gray-400 leading-7">
                We work closely with clients to understand their vision
                and deliver content that matches their expectations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-green-600 px-8 py-16 text-center sm:px-16">

          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-black">
            Have a Project in Mind?
          </h2>

          <p className="text-black/70 text-lg mb-8">
            Let's turn your footage into something people want to watch.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#171717] transition"
          >
            Let's Work Together
          </Link>

        </div>
      </section>

    </div>
  );
}

export default About;