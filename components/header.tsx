"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Hexagon } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Hexagon
                className="w-10 h-10 text-violet-400 group-hover:text-cyan-400 transition-colors duration-300"
                fill="currentColor"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neutral-900 font-black text-sm">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                SNAPWISE
              </span>
              <span className="text-xs text-violet-400 -mt-1 tracking-widest">SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-neutral-300 hover:text-white transition-colors duration-300 py-2 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 group"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neutral-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-violet-500/20">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-violet-500/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
