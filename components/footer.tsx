import Link from "next/link"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, Hexagon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Hexagon className="w-10 h-10 text-violet-400" fill="currentColor" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-900 font-black text-sm">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">SNAPWISE</span>
                <span className="text-xs text-violet-400 -mt-1 tracking-widest">SOLUTIONS</span>
              </div>
            </div>
            <p className="text-neutral-400 mb-8 max-w-md leading-relaxed">
              Crafting digital experiences that push boundaries and redefine possibilities. We turn complex challenges
              into elegant solutions.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-neutral-800 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon size={20} className="text-neutral-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Navigation</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Portfolio", "Career", "Contact"].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link === "About Us" ? "/about" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-neutral-400 hover:text-violet-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-neutral-400">
                <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p>Snapwisesolutions@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-neutral-400">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Phone</p>
                  <p>+44 7404 758487</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-neutral-400">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Location</p>
                  <p>San Francisco, UK</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">© 2024 Snapwise Solutions. Crafted with precision.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-neutral-500 hover:text-violet-400 text-sm transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-violet-400 text-sm transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-violet-400 text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
