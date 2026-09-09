import React from 'react'
import { Link } from "react-router-dom";
import guruLogo from '../../assets/guru-logo.jpeg'
function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 py-10 md:flex-row ">

          <Link to="/">
            <img
              src={guruLogo}
              alt="GURU EDITORS"
              className="w-40 rounded-full"
            />
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3">

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-green-600 hover:bg-green-600"
            >
              <i className="fa fa-facebook" />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-green-600 hover:bg-green-600"
            >
              <i className="fa fa-instagram" />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-green-600 hover:bg-green-600"
            >
              <i className="fa fa-youtube-play" />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-green-600 hover:bg-green-600"
            >
              <i className="fa fa-linkedin" />
            </a>

          </div>
        </div>


        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              About Us
            </h3>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              GURU EDITORS is a professional video editing studio
              helping creators, brands, and businesses turn ideas
              into engaging visual content.
            </p>

            <Link
              to="/about"
              className="mt-5 inline-block text-sm font-medium text-green-600 transition hover:text-green-400"
            >
              Read More →
            </Link>
          </div>


          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <Link
                  to="/"
                  className="transition hover:text-green-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-green-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition hover:text-green-600"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="transition hover:text-green-600"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-green-600"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>Video Editing</li>
              <li>Motion Graphics</li>
              <li>Color Grading</li>
              <li>YouTube Videos</li>
              <li>Social Media Reels</li>

            </ul>
          </div>


          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Newsletter
            </h3>

            <p className="text-sm leading-6 text-gray-400">
              Subscribe for creative tips, updates, and our latest work.
            </p>

            <form className="mt-5 flex">

              <input
                type="email"
                placeholder="Your Email"
                className="min-w-0 flex-1 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-green-600"
              />

              <button
                type="submit"
                className="flex w-12 items-center justify-center bg-green-600 transition hover:bg-green-700"
              >
                <i className="fa fa-send" />
              </button>

            </form>
          </div>

        </div>


        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-xs text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} GURU EDITORS.
            All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              to="/privacy"
              className="transition hover:text-green-600"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-green-600"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;