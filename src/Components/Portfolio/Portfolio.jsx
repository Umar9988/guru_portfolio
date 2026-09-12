import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Cinematic Brand Film",
    category: "Commercial",
    description:
      "A cinematic brand film focused on storytelling, atmosphere, and premium visual direction.",
    video:
      "https://cdn.coverr.co/videos/coverr-a-man-working-on-his-laptop-1578/1080p.mp4",
    duration: "01:24",
    client: "Brand Campaign",
    featured: true,
  },
  {
    id: 2,
    title: "YouTube Content Edit",
    category: "YouTube",
    description:
      "Dynamic editing with clean cuts, motion graphics and engaging pacing.",
    video:
      "https://cdn.coverr.co/videos/coverr-man-working-on-his-laptop-1577/1080p.mp4",
    duration: "08:42",
    client: "Creator Project",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Social Media",
    description:
      "Short-form content designed for attention, retention and social engagement.",
    video:
      "https://cdn.coverr.co/videos/coverr-a-woman-using-her-phone-1575/1080p.mp4",
    duration: "00:38",
    client: "Social Campaign",
  },
  {
    id: 4,
    title: "Product Advertisement",
    category: "Commercial",
    description:
      "A polished product commercial combining clean visuals with energetic editing.",
    video:
      "https://cdn.coverr.co/videos/coverr-working-at-a-desk-1576/1080p.mp4",
    duration: "00:52",
    client: "Product Launch",
  },
  {
    id: 5,
    title: "Podcast Highlights",
    category: "Podcast",
    description:
      "High-retention podcast clips with captions, transitions and modern motion design.",
    video:
      "https://cdn.coverr.co/videos/coverr-podcast-recording-1579/1080p.mp4",
    duration: "01:12",
    client: "Podcast Series",
  },
  {
    id: 6,
    title: "Travel Story",
    category: "Cinematic",
    description:
      "A cinematic travel story built around emotion, music and visual storytelling.",
    video:
      "https://cdn.coverr.co/videos/coverr-aerial-view-of-a-city-1574/1080p.mp4",
    duration: "02:16",
    client: "Travel Project",
  },
];

const categories = [
  "All",
  "Commercial",
  "YouTube",
  "Social Media",
  "Podcast",
  "Cinematic",
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProject = projects.find((project) => project.featured);

  return (
    <div className="bg-[#080808] text-white">

      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden px-6 pt-28 pb-20 md:px-12 lg:px-20">

        {/* Background glow */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-green-600">
            Our Work
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Stories that
            <span className="block text-green-500">
              deserve to be seen.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white">
            Explore our selected video editing projects — from cinematic
            commercials and YouTube content to social media campaigns and
            branded storytelling.
          </p>

        </div>
      </section>

      {/* ================= FEATURED PROJECT ================= */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-green-500">
                Featured Project
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Editor's Pick
              </h2>
            </div>

            <span className="hidden text-sm text-gray-500 md:block">
              01 / 06
            </span>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111]">

            <div className="grid lg:grid-cols-5">

              {/* Video */}
              <div className="relative aspect-video overflow-hidden lg:col-span-3 lg:aspect-auto lg:min-h-[500px]">

                <video
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={featuredProject.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 flex items-center gap-3">

                  <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition hover:scale-110">
                    ▶
                  </button>

                  <span className="text-sm font-medium">
                    Watch Showreel
                  </span>

                </div>
              </div>

              {/* Information */}
              <div className="flex flex-col justify-between p-8 lg:col-span-2 lg:p-12">

                <div>

                  <span className="rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-300">
                    {featuredProject.category}
                  </span>

                  <h3 className="mt-8 text-3xl font-bold leading-tight md:text-4xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-5 leading-7 text-gray-400">
                    {featuredProject.description}
                  </p>

                </div>

                <div className="mt-12">

                  <div className="mb-8 grid grid-cols-2 gap-6 border-y border-white/10 py-6">

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        Client
                      </p>
                      <p className="mt-2 font-medium">
                        {featuredProject.client}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        Duration
                      </p>
                      <p className="mt-2 font-medium">
                        {featuredProject.duration}
                      </p>
                    </div>

                  </div>

                  <button className="group/btn flex items-center gap-3 font-semibold">
                    View Full Project
                    <span className="transition group-hover/btn:translate-x-2">
                      →
                    </span>
                  </button>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-wrap gap-3">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.03] text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="px-6 pb-28 md:px-12 lg:px-20">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">

          {filteredProjects
            .filter((project) => !project.featured)
            .map((project) => (

              <div
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101010] transition duration-500 hover:-translate-y-2 hover:border-white/20"
              >

                {/* Video */}
                <div className="relative aspect-video overflow-hidden">

                  <video
                    src={project.video}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />

                  {/* Play icon */}
                  <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition duration-300 group-hover:opacity-100">
                    ▶
                  </div>

                  {/* Duration */}
                  <span className="absolute bottom-4 right-4 rounded-md bg-black/70 px-3 py-1 text-xs backdrop-blur">
                    {project.duration}
                  </span>

                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                      {project.category}
                    </span>

                    <span className="text-gray-600">
                      0{project.id}
                    </span>

                  </div>

                  <h3 className="mt-4 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  <button className="mt-6 flex items-center gap-2 text-sm font-semibold transition hover:text-green-400">
                    View Project
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                </div>

              </div>

            ))}

        </div>

      </section>

      {/* ================= CTA ================= */}
     
<section className="px-6 pb-24">

  <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-green-600 px-8 py-16 text-center sm:px-16">

    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/70">
      Have a project in mind?
    </p>

    <h2 className="mt-5 text-4xl font-bold leading-tight text-black md:text-6xl">
      Let's create something
      <span className="block text-white">
        worth watching.
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-xl leading-7 text-black/70">
      Tell us about your project and let's turn your footage into
      content that gets attention.
    </p>

    <Link
      to="/contact"
      className="mt-9 inline-flex rounded-full bg-black px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#171717]"
    >
      Start a Project →
    </Link>

  </div>

</section>



    </div>
  );
}

export default Portfolio;