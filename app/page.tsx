'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Code2, Layers, Zap, Shield, Users, Trophy, Star, ChevronRight, Play, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technologies = [
    { name: 'React', logo: '/atom.png', category: 'Frontend' },
    { name: 'Node.js', logo: '/nodejs.png', category: 'Backend' },
    { name: 'TypeScript', logo: '/typescript.png', category: 'Language' },
    { name: 'Python', logo: '/python.png', category: 'Backend' },
    { name: 'PostgreSQL', logo: '/postgresql.png', category: 'Database' },
    { name: 'AWS', logo: '/aws.png', category: 'Cloud' },
    { name: 'Docker', logo: '/docker.png', category: 'DevOps' },
    { name: 'GraphQL', logo: '/graphql.png', category: 'API' },
  ]

  const services = [
    {
      title: 'Web Applications',
      description: 'Modern, scalable web applications built with cutting-edge technologies.',
      icon: <Code2 className="w-8 h-8" />,
      features: ['React/Next.js', 'Progressive Web Apps', 'API Integration', 'Performance Optimization']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      icon: <Layers className="w-8 h-8" />,
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies.',
      icon: <Zap className="w-8 h-8" />,
      features: ['AWS/Azure/GCP', 'Serverless Architecture', 'CI/CD Pipelines', 'Monitoring & Analytics']
    },
  ]

  const stats = [
    { value: '150+', label: 'Projects Delivered', icon: '🚀' },
    { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '24/7', label: 'Support Available', icon: '🛡️' },
    { value: '5+', label: 'Years Experience', icon: '💎' },
  ]

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'CTO at TechFlow',
      content: 'Snapwise delivered beyond our expectations. Their technical expertise and attention to detail is unmatched.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Product Manager at InnovateCorp',
      content: 'Working with Snapwise was a game-changer. They transformed our complex requirements into an elegant solution.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'Founder of StartupX',
      content: 'The team at Snapwise is incredibly talented. They helped us scale from idea to production seamlessly.',
      avatar: '👨‍🚀',
      rating: 5
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-violet-400 mr-2" />
              <span className="text-violet-400 text-sm font-medium">Crafting Digital Excellence</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="block text-white">BUILD</span>
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                THE FUTURE
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              We create digital experiences that don't just meet expectations—they redefine them.
              From concept to deployment, we're your partners in innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <button className="group flex items-center text-neutral-300 hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 bg-neutral-800 hover:bg-violet-600 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              What We <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Create</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              From web applications to mobile solutions, we build digital products that scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-violet-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-neutral-400 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral-300">
                      <ChevronRight className="w-4 h-4 text-violet-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Our <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              We leverage the most powerful and modern technologies to build exceptional products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative bg-neutral-800/30 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 hover:scale-110 text-center"
              >
                <div className="mb-4">
                  <img src={tech.logo} alt={tech.name} className="h-12 mx-auto" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-violet-400">{tech.category}</p>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-violet-500/10 via-neutral-900 to-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="text-neutral-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Client <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-violet-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and turn your vision into reality.
            Great things start with a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-neutral-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Let's Talk
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
