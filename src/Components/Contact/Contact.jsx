import React from "react";

function Contact() {
  return (
    <div className="bg-[#0b0b0b] text-white">

      {/* ================= HERO ================= */}
      <section className="px-6 py-24 text-center">
        {/* <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-green-500">
          Contact Guru Editors
        </p> */}

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Let's Create Something
          <span className="text-green-600"> Amazing</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Have a video project in mind? Tell us about it and our team will
          get back to you as soon as possible.
        </p>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-bold">
              Let's Talk About Your Project
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Whether you need YouTube editing, social media content,
              cinematic videos, reels, or professional post-production,
              Guru Editors is ready to help.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-700 text-xl text-black">
                  ✉
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="mt-1 text-gray-400">
                    guru.editors@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-700 text-xl text-black">
                  ☎
                </div>

                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="mt-1 text-gray-400">
                    Available for project discussions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-700 text-xl text-black">
                  ⚡
                </div>

                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="mt-1 text-gray-400">
                    Usually within 24 hours
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <p className="mb-3 text-sm text-gray-500">
                Prefer a quick conversation?
              </p>

              <a
                href="#"
                className="inline-block rounded-lg bg-green-600 px-7 py-3 font-semibold text-black transition hover:bg-green-500"
              >
                Chat With Us
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-2xl border border-white/10 bg-[#121212] p-6 md:p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-green-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-green-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Service
                </label>

                <select
                  className="w-full rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-gray-400 outline-none transition focus:border-green-500"
                >
                  <option>Select a service</option>
                  <option>YouTube Video Editing</option>
                  <option>Short Form / Reels</option>
                  <option>Cinematic Video Editing</option>
                  <option>Social Media Editing</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Tell Us About Your Project
                </label>

                <textarea
                  rows="5"
                  placeholder="Describe your project..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-green-600 px-6 py-3 font-bold text-black transition hover:bg-green-500"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t border-white/10 px-6 py-20 text-center">

        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to Bring Your Videos to Life?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          Let's turn your raw footage into content that gets attention.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-black transition hover:bg-green-500"
        >
          Start Your Project
        </a>

      </section>

    </div>
  );
}

export default Contact;
