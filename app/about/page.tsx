'use client'

import { useState, useEffect } from 'react'
import { Target, Users, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to simplify web development' },
    { year: '2020', event: 'First 50 Projects', description: 'Completed our first 50 successful projects' },
    { year: '2021', event: 'Team Expansion', description: 'Grew our team to 25+ skilled professionals' },
    { year: '2022', event: 'Global Reach', description: 'Expanded services to international markets' },
    { year: '2023', event: '500+ Projects', description: 'Milestone of 500+ completed projects' },
    { year: '2024', event: 'Innovation Hub', description: 'Launched our innovation and R&D division' },
  ]

  const approaches = [
    {
      icon: <Target className="w-8 h-8 text-emerald-500" />,
      title: 'Goal-Oriented Development',
      description: 'We align every line of code with your business objectives to ensure maximum ROI.'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: 'Collaborative Process',
      description: 'Close collaboration with clients throughout the development lifecycle.'
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-500" />,
      title: 'Quality First',
      description: 'Rigorous testing and quality assurance at every stage of development.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
      title: 'Scalable Solutions',
      description: 'Building applications that grow with your business needs.'
    },
  ]

  const whyChoosePoints = [
    'Expert team with 5+ years of experience',
    'Proven track record of 500+ successful projects',
    'Cutting-edge technology stack',
    '24/7 support and maintenance',
    'Agile development methodology',
    'Competitive pricing and flexible packages',
    'On-time delivery guarantee',
    'Post-launch support and optimization'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/team-collaboration-tech.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              About Snapwise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering businesses through innovative technology solutions and exceptional development expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our History</h2>
            <p className="text-gray-400 text-lg">A journey of growth, innovation, and success</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold text-emerald-500 mr-3">{milestone.year}</span>
                        <h3 className="text-xl font-semibold">{milestone.event}</h3>
                      </div>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-800"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-400 text-lg">How we deliver exceptional results for our clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div 
                key={approach.title}
                className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{approach.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                <p className="text-gray-400">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-gray-400 text-lg mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results. 
                Our commitment to excellence and client satisfaction sets us apart in the industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChoosePoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-8 rounded-2xl">
                <img 
                  src="/professional-team-computers.png" 
                  alt="Our team at work"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Grow Together */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Grow Together</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
            Ready to take your business to the next level? Partner with Snapwise Solutions and let's build 
            something amazing together. Our team is excited to discuss your project and help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services" 
              className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
