import React from 'react'
import { NavLink } from "react-router-dom";
import guruLogo from '../../assets/guru-logo.jpeg'

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

       {/* Logo */}
    <NavLink to="/" className="flex items-center gap-2">
      <img
        src={guruLogo}
        alt="Guru Editors Logo"
        className="h-12 w-auto object-contain rounded-full"
      />

      <div className="text-4xl font-bold tracking-wide">
        <span className="text-white">Guru</span>
        <span className="text-green-600"> Editors</span>
      </div>
    </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-[#01B22E]"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-[#01B22E]"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-[#01B22E]"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-[#01B22E]"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-[#01B22E]"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <NavLink
          to="/contact"
          className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Let's Talk
        </NavLink>

      </div>
    </header>
  );
}

export default Header;