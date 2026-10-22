import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal'
import usePageTitle from '../../hooks/usePageTitle'

import guruVideo from '../../assets/video/proj-1.mp4'

// Helper function to turn raw seconds into HH:MM:SS or MM:SS
function formatTime(totalSeconds) {
  if (!totalSeconds || isNaN(totalSeconds)) return '00:00'
  
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)

  if (hours > 0) {
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

const projects = [
  {
    id: 1,
    title: 'Cinematic Brand Film',
    category: 'Commercial',
    description: 'A cinematic brand film focused on storytelling, atmosphere, and premium visual direction.',
    type: 'mp4',
    source: guruVideo,
    thumbnail: '',
    duration: '', // Auto-calculated by browser!
    client: 'Brand Campaign',
    featured: true,
  },
  {
    id: 2,
    title: 'Short Form Reel',
    category: 'Social Media',
    description: 'Short-form content designed for attention, retention and social engagement.',
    type: 'youtube',
    source: 'YbtJo8nMQRI',
    thumbnail: 'https://img.youtube.com/vi/YbtJo8nMQRI/maxresdefault.jpg',
    duration: '', // Auto-calculated by browser!
    client: 'Social Campaign',
  },
  {
    id: 3,
    title: 'Full 1-Hour Podcast Edit',
    category: 'Podcast',
    description: 'Full podcast post-production including multi-cam switching, color grading, and audio mastering.',
    type: 'youtube',
    source: 'dIM-ih4B_VI', // YouTube Video ID
    thumbnail: 'https://img.youtube.com/vi/dIM-ih4B_VI/maxresdefault.jpg',
    duration: '1:02:14', // Enter exact duration for YouTube links
    client: 'Podcast Pro Series',
  },
  {
    id: 4,
    title: 'Product Advertisement',
    category: 'Commercial',
    description: 'A polished product commercial combining clean visuals with energetic editing.',
    type: 'youtube',
    source: 'uKNMb56sevk',
    thumbnail: 'https://img.youtube.com/vi/uKNMb56sevk/maxresdefault.jpg',
    duration: '', // Auto-calculated!
    client: 'Product Launch',
  },
]

const categories = ['All', 'Commercial', 'YouTube', 'Social Media', 'Podcast', 'Cinematic']

// Sub-component for individual project cards (handles auto-duration)
function ProjectCard({ project, onSelect }) {
  const [duration, setDuration] = useState(project.duration)

  const handleMetadata = (e) => {
    if (!project.duration) {
      setDuration(formatTime(e.target.duration))
    }
  }

  return (
    <article className="video-card group overflow-hidden rounded-3xl border border-white/10 bg-[#101010] transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
      <div
        onClick={() => onSelect(project, duration)}
        className="relative aspect-video cursor-pointer overflow-hidden bg-black"
      >
        {project.type === 'mp4' ? (
          <video
            src={project.source}
            muted
            loop
            playsInline
            onLoadedMetadata={handleMetadata}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause()
              e.currentTarget.currentTime = 0
            }}
          />
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        )}

        <div className="video-overlay absolute inset-0 bg-black/20 opacity-100 transition group-hover:opacity-0" />

        <div className="play-btn absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-2xl transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Exact Duration Badge */}
        <span className="absolute bottom-4 right-4 rounded-md bg-black/80 px-3 py-1 text-xs font-mono backdrop-blur text-white">
          {duration || 'Loading...'}
        </span>
      </div>

      <div className="p-7">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-500">
            {project.category}
          </span>
          <span className="text-gray-700">0{project.id}</span>
        </div>

        <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-500">{project.description}</p>

        <button
          onClick={() => onSelect(project, duration)}
          className="mt-6 flex items-center gap-2 text-sm font-semibold transition hover:text-green-500"
        >
          View Project
          <span className="transition group-hover:translate-x-1">→</span>
        </button>
      </div>
    </article>
  )
}

function Portfolio() {
  usePageTitle('Portfolio')

  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeDuration, setActiveDuration] = useState('')

  const heroRef = useScrollReveal()
  const featuredRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const featuredProject = projects.find((p) => p.featured)

  const handleSelectProject = (project, calculatedDuration) => {
    setSelectedProject(project)
    setActiveDuration(calculatedDuration || project.duration)
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-20">
        <div className="absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-green-600/8 blur-[150px]" />

        <div ref={heroRef} className="fade-in-up relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-green-500">
            Our Portfolio
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
            Work that
            <span className="block text-gray-500">speaks for itself.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of our latest video editing, motion graphics,
            commercials and cinematic storytelling projects.
          </p>
        </div>
      </section>

      {/* ================= FEATURED PROJECT ================= */}
      <section className="px-6 pb-28 md:px-12 lg:px-20">
        <div ref={featuredRef} className="fade-in-up mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Featured Work</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Editor's Pick</h2>
            </div>
            <span className="hidden text-sm text-gray-600 md:block">01 / {String(projects.length).padStart(2, '0')}</span>
          </div>

          <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]">
            <div className="grid lg:grid-cols-5">
              <div
                onClick={() => handleSelectProject(featuredProject)}
                className="relative min-h-[350px] cursor-pointer overflow-hidden lg:col-span-3 lg:min-h-[520px]"
              >
                {featuredProject.type === 'mp4' ? (
                  <video
                    src={featuredProject.source}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={featuredProject.thumbnail}
                    alt={featuredProject.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-7 left-7 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl transition duration-300 group-hover:scale-110 pulse-ring">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Watch Project</p>
                    <p className="text-xs text-gray-400">{featuredProject.duration || 'Click to Play'}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 lg:col-span-2 lg:p-12">
                <div>
                  <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400">
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
                      <p className="text-xs uppercase tracking-wider text-gray-500">Client</p>
                      <p className="mt-2 font-medium">{featuredProject.client}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500">Type</p>
                      <p className="mt-2 font-medium uppercase">{featuredProject.type}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectProject(featuredProject)}
                    className="group/btn flex items-center gap-3 font-semibold transition hover:text-green-500"
                  >
                    View Full Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
                className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-500 text-black'
                    : 'border border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="px-6 pb-32 md:px-12 lg:px-20">
        <div ref={gridRef} className="fade-in-up mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {filteredProjects
            .filter((p) => !p.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleSelectProject}
              />
            ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-12 lg:px-20">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/8 blur-[140px]" />

        <div ref={ctaRef} className="fade-in-up relative mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-500">
            Start something great
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Your footage.
            <span className="block text-gray-500">Our creativity.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Have a project that deserves professional editing?
            Let's turn your vision into something people remember.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-green-400"
          >
            Start a Project →
          </Link>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-2xl animate-[pageEnter_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
              ×
            </button>

            <div className="relative aspect-video bg-black w-full">
              {selectedProject.type === 'mp4' ? (
                <video
                  src={selectedProject.source}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.source}?autoplay=1&rel=0`}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-green-500">
                    {selectedProject.category}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                    {selectedProject.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex gap-8 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">Client</p>
                    <p className="mt-1 text-gray-300">{selectedProject.client}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">Exact Duration</p>
                    <p className="mt-1 text-gray-300 font-mono">{activeDuration || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Portfolio