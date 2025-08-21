"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Hexagon, ChevronDown, Calendar, Zap, Cloud , Radar , Users } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ]

  const productItems = [
    {
      name: "QueSync",
      href: "https://www.quesync.in/",
      icon: Calendar,
      description: "QueSync revolutionizes clinic operations by enabling virtual queue management.",
    },
    {
      name: "Symplr",
      href: "https://symplr.app/",
      icon: Zap,
      description: "Sympir streamlines the dining experience by making ordering effortless",
    },
    {
      name: "TempHeaven",
      href: "https://tempheaven.web.app/",
      icon: Cloud,
      description: "TempHeaven provides quick and temporary email addresses.",
    },
    {
      name: "LeanSuit",
      href: "https://theleansuite.com/",
      icon: Users,
      description: "Digital Solution for Lean Manufacturing",
    },
    {
      name: "Tracker.in",
      href: "https://trakker.in/",
      icon: Radar,
      description: "TempHeaven provides quick and temporary email addresses.",
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <Hexagon
                className="w-8 h-8 sm:w-10 sm:h-10 text-violet-400 group-hover:text-cyan-400 transition-colors duration-300"
                fill="currentColor"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neutral-900 font-black text-xs sm:text-sm">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                SNAPWISE
              </span>
              <span className="text-xs text-violet-400 -mt-1 tracking-widest">SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-neutral-300 hover:text-white transition-colors duration-300 py-2 group text-sm xl:text-base"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}

            <div className="relative">
              <button
                className="relative text-neutral-300 hover:text-white transition-colors duration-300 py-2 group flex items-center space-x-1 text-sm xl:text-base"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                <span className="relative z-10">Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
              </button>

              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-neutral-800/95 backdrop-blur-md border border-violet-500/20 rounded-lg shadow-xl"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  {productItems.map((product) => {
                    const IconComponent = product.icon
                    return (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block px-4 py-4 text-neutral-300 hover:text-white hover:bg-violet-500/10 transition-all duration-300 first:rounded-t-lg last:rounded-b-lg group"
                      >
                        <div className="flex items-start space-x-3">
                          <IconComponent className="w-5 h-5 text-violet-400 group-hover:text-cyan-400 transition-colors duration-300 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-white mb-1 text-sm xl:text-base">{product.name}</div>
                            <div className="text-xs xl:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <a
              href="https://wa.me/447404758487?text=Hello%2C%20I%20want%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 group text-sm lg:text-base"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden text-neutral-300 hover:text-white transition-colors duration-300 p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 border-t border-violet-500/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-violet-500/10 rounded-lg transition-all duration-300 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-2">
                <button
                  className="w-full flex items-center justify-between px-2 py-3 text-neutral-300 hover:text-white hover:bg-violet-500/10 rounded-lg transition-all duration-300 text-base font-medium"
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isMobileProductsOpen && (
                  <div className="mt-2 ml-2 space-y-1">
                    {productItems.map((product) => {
                      const IconComponent = product.icon
                      return (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="block px-3 py-3 text-neutral-400 hover:text-white hover:bg-violet-500/10 rounded-lg transition-all duration-300 group"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setIsMobileProductsOpen(false)
                          }}
                        >
                          <div className="flex items-start space-x-3">
                            <IconComponent className="w-5 h-5 text-violet-400 group-hover:text-cyan-400 transition-colors duration-300 mt-0.5 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-neutral-300 group-hover:text-white mb-1 text-sm">
                                {product.name}
                              </div>
                              <div className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300 leading-relaxed break-words">
                                {product.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <div className="px-4 pt-2">
                <a
                  href="https://wa.me/447404758487?text=Hello%2C%20I%20want%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
