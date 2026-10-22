import React from 'react'
import { Link } from 'react-router-dom'
import guruLogo from '../../assets/guru-logo.jpeg'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 py-10 md:flex-row">

          <Link to="/" className="flex items-center gap-3">
            <img
              src={guruLogo}
              alt="GURU EDITORS"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-bold">GURU EDITORS</p>
              <p className="text-xs text-gray-500">Video Editing Studio</p>
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { label: 'In', href: '#' },
              { label: 'Ig', href: '#' },
              { label: 'Yt', href: '#' },
              { label: 'Li', href: '#' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:border-green-600 hover:bg-green-600 hover:text-black"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">About Us</h3>
            <p className="max-w-sm text-sm leading-7 text-gray-400">
              GURU EDITORS is a professional video editing studio
              helping creators, brands, and businesses turn ideas
              into engaging visual content.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-green-500 transition hover:text-green-400"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-green-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                'Video Editing',
                'Motion Graphics',
                'Color Grading',
                'YouTube Videos',
                'Social Media Reels',
                'Podcast Editing',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="transition hover:text-green-500">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Newsletter</h3>
            <p className="text-sm leading-6 text-gray-400">
              Subscribe for creative tips, updates, and our latest work.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Handle newsletter subscription
                alert('Thank you for subscribing!')
                e.target.reset()
              }}
              className="mt-5 flex overflow-hidden rounded-lg border border-white/10 transition-all focus-within:border-green-600"
            >
              <input
                type="email"
                required
                placeholder="Your Email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="flex w-12 items-center justify-center bg-green-600 transition hover:bg-green-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-xs text-gray-500 md:flex-row">
          <p>
            © {currentYear} GURU EDITORS. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link to="/privacy" className="transition hover:text-green-500">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-green-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer