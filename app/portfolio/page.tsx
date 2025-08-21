"use client"

import { useState, useEffect } from "react"
import {
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  Award,
  CheckCircle,
  Code,
  Smartphone,
  Globe,
  Database,
  Zap,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technologies = [
    { name: "JavaScript", category: "Language", color: "/png/js.png" },
    { name: "Python", category: "Language", color: "/png/python.png" },
    { name: "PHP", category: "Language", color: "/png/php.png" },
    { name: "React", category: "Framework", color: "/png/react.png" },
    { name: "Angular", category: "Framework", color: "/png/angular.png" },
    { name: "Node.js", category: "Framework", color: "/png/nodejs.png" },
    { name: "Laravel", category: "Framework", color: "/png/laravel.png" },
    { name: "MySQL", category: "Database", color: "/png/mysql.png" },
    { name: "MongoDB", category: "Database", color: "/png/mongodb.png" },
    { name: "PostgreSQL", category: "Database", color: "/png/postgresql.png" },
    { name: "AWS", category: "Cloud", color: "/png/aws.png" },
    { name: "Azure", category: "Cloud", color: "/png/php.png" },
    { name: "Google Cloud", category: "Cloud", color: "/png/cloud.png" },
    { name: "Docker", category: "Tool", color: "/png/docker.png" },
    { name: "Git", category: "Tool", color: "/png/git.png" },
    { name: "Figma", category: "Tool", color: "/png/figma.png" },
  ]

  const projects = [
    {
      id: 1,
      project_img: '/myukbuilders.PNG',
      name: "Luxurious Business Space Renovation",
      client: "Corporate Retail",
      category: "Web Development",
      description:
        "Transforming corporate spaces into luxurious, innovative, and inspiring environments that blend design and functionality, elevating workspaces, brand image, and client experiences",
      problem: "Client needed a scalable online store to handle high traffic during sales events.",
      solution: "Developed a robust platform with microservices architecture, CDN integration, and automated scaling.",
      technologies: ["HTML", "SCSS", "JavaScript", "Firebase"],
      image: "/ecommerce-dashboard.png",
      results: ["45% increase in conversion rate", "60% faster page load times", "99.9% uptime during peak sales"],
      liveUrl: "https://www.myukbuilders.co.uk/",
      githubUrl: "#",
    },
    {
      id: 2,
      project_img: '/djkapil.PNG',
      name: "DJ Kapil",
      client: "Service Provide",
      category: "Web Development",
      description:
        "DJ Kapil, born in Ahmedabad (India) and now based in London (UK), began his professional DJ career 10 years ago and has performed at festivals and events worldwide.",
      problem: "Manual processes were causing delays and errors in patient care management.",
      solution: "Digitized entire workflow with secure patient data management and automated scheduling.",
      technologies: ["HTML", "SCSS", "JavaScript", "Firebase"],
      image: "/healthcare-system.png",
      results: [
        "70% reduction in appointment scheduling time",
        "50% decrease in administrative errors",
        "HIPAA compliant security",
      ],
      liveUrl: "https://djkapil.com/",
      githubUrl: "#",
    },
    {
      id: 3,
      project_img: '/TheLeanSuit.PNG',
      name: "The LeanSuit - Digital Solution for Lean Manufacturing",
      client: "Educations Solutions",
      category: "Web Development",
      description:
        "Simplify work, improve efficiency, and engage frontline employees — all in one place.",
      problem: "Restaurant chain needed to expand their delivery service with a user-friendly mobile solution.",
      solution: "Created intuitive mobile app with GPS tracking, multiple payment options, and push notifications.",
      technologies: ["Ionic", "Angular", ".net", "Fusion", "Charts", "Monorepo", "Nx"],
      image: "/food-delivery-mobile.png",
      results: ["200% increase in online orders", "4.8/5 app store rating", "30% customer retention improvement"],
      liveUrl: "https://theleansuite.com/",
      githubUrl: "#",
    },
    {
      id: 4,
      project_img: '/polynomial.PNG',
      name: "Interaction Studio - NLP Chat bot Solution",
      client: "Educations",
      category: "Web Development",
      description:
        "An advanced platform for developers to build Conversational Actions with advanced NLP Cognitive Cores. With Intents, Reponse Library and Knowledge Graphs, complex use cases can be seamlessly realized with multi channel integrations.",
      problem: "Real estate agency was losing leads due to poor follow-up and disorganized client data.",
      solution: "Built comprehensive CRM with automated workflows, lead scoring, and integrated communication tools.",
      technologies: ["Angular", "Nodejs"],
      image: "/real-estate-crm.png",
      results: [
        "85% improvement in lead conversion",
        "40% increase in agent productivity",
        "90% client satisfaction rate",
      ],
      liveUrl: "https://www.polynomial.ai/solution",
      githubUrl: "#",
    },
    {
      id: 5,
      project_img: '/mminstalling.PNG',
      name: "Creating beautiful spaces for Business",
      client: "Services Provide",
      category: "Web Development",
      description:
        "At MM Installing, we believe that quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skilful execution",
      problem: "Educational institute needed to transition to online learning during pandemic.",
      solution: "Developed comprehensive LMS with video conferencing, assignment management, and progress analytics.",
      technologies: ["React", "Firebase"],
      image: "/lms-platform.png",
      results: ["500+ students enrolled", "95% course completion rate", "40% cost reduction in operations"],
      liveUrl: "https://mminstalling.com/",
      githubUrl: "#",
    },
    {
      id: 6,
      project_img: '/pramukhconsultancy.PNG',
      name: "Pramukh Consultancy",
      client: "Financial Services",
      category: "Web Development",
      description:
        "We at Pramukh Consultant are not only concerned with the quality of services but also care for our approach, value, commitment and behaviors towards fulfillment of client",
      problem: "Financial institution needed a secure, user-friendly mobile banking solution.",
      solution: "Created feature-rich mobile app with bank-grade security and intuitive user experience.",
      technologies: ["HTML", "Bootstrap", "JavaScript"],
      image: "/fintech-mobile.png",
      results: ["300% increase in mobile transactions", "Zero security incidents", "4.9/5 user rating"],
      liveUrl: "https://pramukhconsultancy.org/",
      githubUrl: "#",
    },
    {
      id: 7,
      project_img: '/patelmatrimony.PNG',
      name: "Patel's vivah -Matrimony app for patel community",
      client: "Financial Services",
      category: "Mobile Development",
      description:
        "The most trusted matrimony service for Patels. Patel's Vivah offers a large number of matches from various Patel communities like Leva, Kadva across the world.Thousands of Patels brides and grooms from all over the world have successfully found their life partner using Patel's Vivah app.",
      problem: "Financial institution needed a secure, user-friendly mobile banking solution.",
      solution: "Created feature-rich mobile app with bank-grade security and intuitive user experience.",
      technologies: ["Ionic", "Angular", "Laravel"],
      image: "/fintech-mobile.png",
      results: ["300% increase in mobile transactions", "Zero security incidents", "4.9/5 user rating"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 8,
      project_img: '/colife.PNG',
      name: "Colife -social networking",
      client: "Financial Services",
      category: "Mobile Development",
      description:
        "Colife is a dynamic social networking app designed to connect like-minded individuals and foster meaningful interactions. Share, explore, and engage with a vibrant community that makes your social life more enriching and fun!",
      problem: "Financial institution needed a secure, user-friendly mobile banking solution.",
      solution: "Created feature-rich mobile app with bank-grade security and intuitive user experience.",
      technologies: ["Ionic", "Angular", "Nodejs"],
      image: "/fintech-mobile.png",
      results: ["300% increase in mobile transactions", "Zero security incidents", "4.9/5 user rating"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const testimonials = [
    {
      name: "Rahul Gandhi",
      position: "CEO",
      company: "TechStart Inc.",
      content:
        "Snapwise Solutions transformed our business with their innovative e-commerce platform. The results exceeded our expectations.",
      rating: 5,
      avatar: "👩‍💼",
      logo: "/client-logo-2.png",
    },
    {
      name: "Dr. NB Jadav",
      position: "Director",
      company: "HealthCare Plus",
      content:
        "The healthcare management system they built has revolutionized our patient care process. Highly recommended!",
      rating: 5,
      avatar: "👨‍⚕️",
      logo: "/client-logo-2.png",
    },
    {
      name: "Nisha Makwana",
      position: "Founder",
      company: "FoodieExpress",
      content: "Our food delivery app has been a game-changer. The team delivered exactly what we envisioned and more.",
      rating: 5,
      avatar: "👨‍🍳",
      logo: "/client-logo-3.png",
    },
  ]

  const achievements = [
    {
      title: "Top Development Agency 2024",
      organization: "Tech Excellence Awards",
      icon: <Award className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "ISO 27001 Certified",
      organization: "Information Security Management",
      icon: <Shield className="w-8 h-8 text-green-400" />,
    },
    {
      title: "AWS Advanced Partner",
      organization: "Amazon Web Services",
      icon: <Zap className="w-8 h-8 text-orange-400" />,
    },
    {
      title: "Microsoft Gold Partner",
      organization: "Microsoft Corporation",
      icon: <Star className="w-8 h-8 text-blue-400" />,
    },
  ]

  const teamMembers = [
    {
      name: "Bhargav Jadav",
      position: "Full Stack Developer",
      expertise: "React, Node.js, MongoDB",
      bio: "Passionate about creating scalable web applications with modern technologies.",
      avatar: "/fullstackk.jpg",
    },
    {
      name: "Nisha Makwana",
      position: "UI/UX Designer",
      expertise: "Figma, Adobe XD, User Research",
      bio: "Crafting beautiful and intuitive user experiences that delight users.",
      avatar: "/uiandux.PNG",
    },
    {
      name: "Jainik Patel",
      position: "DevOps Engineer",
      expertise: "AWS, Docker, Kubernetes",
      bio: "Ensuring smooth deployments and scalable infrastructure for all projects.",
      avatar: "/devops.PNG",
    },
    {
      name: "Harshid Bhai",
      position: "Mobile Developer",
      expertise: "React Native, Flutter, iOS",
      bio: "Building cross-platform mobile apps that provide seamless user experiences.",
      avatar: "/mobile.PNG",
    },
  ]

  const categories = ["All", "Web Development", "Mobile Development", "Software Development", "CRM Development"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-8">
              <Star className="w-4 h-4 text-violet-400 mr-2" />
              <span className="text-violet-400 text-sm font-medium">Innovating Your Digital Future</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white">OUR</span>
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our successful projects and the innovative solutions we've delivered for clients across various
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              About{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Snapwise
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to transform businesses through technology, Snapwise Solutions has been at the
              forefront of digital innovation. We specialize in creating cutting-edge solutions that drive growth,
              enhance user experiences, and deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700 text-center">
              <Code className="w-12 h-12 text-violet-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Web Development</h3>
              <p className="text-neutral-400">Full-stack web applications with modern frameworks</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700 text-center">
              <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Mobile Apps</h3>
              <p className="text-neutral-400">Native and cross-platform mobile solutions</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700 text-center">
              <Globe className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Cloud Solutions</h3>
              <p className="text-neutral-400">Scalable cloud infrastructure and deployment</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700 text-center">
              <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">AI/ML Solutions</h3>
              <p className="text-neutral-400">Intelligent systems and machine learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Technologies{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                & Tools
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              We work with the most advanced and reliable technologies to build exceptional products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative bg-neutral-800/30 backdrop-blur-sm p-4 rounded-xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                  <img src={tech.color} alt="" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-violet-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-16 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
              Explore our successful projects and the innovative solutions we've delivered.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFilter === category
                      ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
                      : "bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-neutral-800/50 backdrop-blur-sm rounded-2xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
                    <span className="text-4xl"><img src={project.project_img} alt="" /></span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-violet-500 text-white text-xs px-2 py-1 rounded-full">{project.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-violet-400 text-sm mb-3">{project.client}</p>
                  <p className="text-neutral-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-neutral-700 text-neutral-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-xs text-neutral-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:from-violet-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:bg-neutral-600 transition-all duration-300 flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Client{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300"
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
                    <p className="text-violet-400 text-sm">{testimonial.position}</p>
                    <p className="text-neutral-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-16 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Achievements{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                & Certifications
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Recognition and certifications that validate our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-neutral-400 text-sm">{achievement.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-white">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto px-4">
              Our talented team of experts who bring your ideas to life with passion and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-neutral-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="mb-4 sm:mb-6">
                  <img
                    src={member.avatar}
                    alt={`${member.name} avatar`}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover border-2 border-violet-500/20 group-hover:border-violet-500/50 transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-violet-400 text-sm sm:text-base mb-3">{member.position}</p>
                <p className="text-neutral-400 text-xs sm:text-sm mb-4 font-medium">{member.expertise}</p>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. Your success story starts with a
            conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-neutral-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Request a Quote
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-neutral-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
