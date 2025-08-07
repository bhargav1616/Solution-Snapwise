'use client'

import { useState, useEffect } from 'react'
import { Globe, Smartphone, Code, Database, ShoppingCart, Puzzle, Settings, Building } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-emerald-500" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Cross-browser Compatibility'],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-teal-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with exceptional user experience.',
      features: ['Native iOS/Android', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: <Code className="w-12 h-12 text-cyan-500" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs and requirements.',
      features: ['Desktop Applications', 'API Development', 'System Integration', 'Legacy Modernization'],
      technologies: ['Python', 'Java', 'C#', '.NET']
    },
    {
      icon: <Database className="w-12 h-12 text-indigo-500" />,
      title: 'CRM Development',
      description: 'Customer relationship management systems to streamline your business processes.',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Integration Capabilities'],
      technologies: ['Salesforce', 'HubSpot', 'Custom CRM', 'APIs']
    },
    {
      icon: <Settings className="w-12 h-12 text-purple-500" />,
      title: 'CMS Development',
      description: 'Content management systems for easy website and content administration.',
      features: ['User-friendly Interface', 'Content Scheduling', 'Multi-user Support', 'SEO Tools'],
      technologies: ['WordPress', 'Drupal', 'Strapi', 'Custom CMS']
    },
    {
      icon: <Building className="w-12 h-12 text-pink-500" />,
      title: 'Enterprise App Development',
      description: 'Scalable enterprise applications designed for large-scale business operations.',
      features: ['Scalable Architecture', 'Security Compliance', 'Integration Support', 'Performance Monitoring'],
      technologies: ['Microservices', 'Cloud Native', 'Docker', 'Kubernetes']
    },
    {
      icon: <Puzzle className="w-12 h-12 text-rose-500" />,
      title: 'Plugin Development',
      description: 'Custom plugins and extensions for existing platforms and applications.',
      features: ['WordPress Plugins', 'Browser Extensions', 'API Integrations', 'Custom Modules'],
      technologies: ['JavaScript', 'PHP', 'Python', 'Chrome APIs']
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-amber-500" />,
      title: 'eCommerce Development',
      description: 'Complete eCommerce solutions with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Mobile Commerce'],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions']
    },
  ]

  const portfolioItems = [
    {
      title: 'E-Learning Platform',
      category: 'Web Development',
      description: 'Comprehensive online learning platform with video streaming and progress tracking.',
      image: '/e-learning-dashboard.png'
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile Development',
      description: 'Full-featured food delivery application with real-time tracking and payments.',
      image: '/food-delivery-app.png'
    },
    {
      title: 'Healthcare Management System',
      category: 'Software Development',
      description: 'Complete healthcare management solution for hospitals and clinics.',
      image: '/healthcare-management-dashboard.png'
    },
    {
      title: 'Real Estate CRM',
      category: 'CRM Development',
      description: 'Custom CRM solution for real estate agencies with lead management.',
      image: '/real-estate-crm-interface.png'
    },
    {
      title: 'Fashion E-commerce Store',
      category: 'eCommerce Development',
      description: 'Modern e-commerce platform for fashion retail with AR try-on features.',
      image: '/fashion-ecommerce-website.png'
    },
    {
      title: 'Corporate Website',
      category: 'CMS Development',
      description: 'Professional corporate website with custom CMS for content management.',
      image: '/corporate-homepage.png'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/technology-services-abstract.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to transform your business and drive digital success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Portfolio */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-gray-400 text-lg">Showcasing our successful projects and client solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.title}
                className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 inline-flex items-center group"
            >
              Start Your Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
