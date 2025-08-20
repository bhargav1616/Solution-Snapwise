'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Code, Database, ShoppingCart, Puzzle, Settings, Building } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(null);


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
      title: 'Luxurious Business Space Renovation',
      category: 'Web Development',
      description: 'Transforming spaces, creating dreams.',
      image: '/myukbuilders.png',
      link: 'https://www.myukbuilders.co.uk/'
    },
    {
      title: 'DJ Kapil',
      category: 'Mobile Development',
      description: 'DJ Kapil, born in Ahmedabad (India) and now based in London (UK), began his professional DJ career 10 years ago and has performed at festivals and events worldwide.',
      image: '/djkapil.png',
      link: 'https://djkapil.com/'
    },
    {
      title: 'The LeanSuit - Digital Solution for Lean Manufacturing',
      category: 'Software Development',
      description: 'Simplify work, improve efficiency, and engage frontline employees — all in one place.',
      image: '/TheLeanSuit.png',
      link: 'https://theleansuite.com/'
    },
    {
      title: 'Interaction Studio - NLP Chat bot Solution',
      category: 'CRM Development',
      description: 'An advanced platform for developers to build Conversational Actions with advanced NLP Cognitive Cores. With Intents, Reponse Library and Knowledge Graphs, complex use cases can be seamlessly realized with multi channel integrations.',
      image: '/polynomial.PNG',
      link: 'https://www.polynomial.ai/solution'
    },
    {
      title: 'Creating beautiful spaces for Business',
      category: 'eCommerce Development',
      description: 'At MM Installing, we believe that quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skilful execution',
      image: '/mminstalling.png',
      link: 'https://mminstalling.com/'
    },
    {
      title: 'Pramukh Consultancy',
      category: 'CMS Development',
      description: 'We at Pramukh Consultant are not only concerned with the quality of services but also care for our approach, value, commitment and behaviors towards fulfillment of client',
      image: '/pramukhconsultancy.png',
      link: 'https://pramukhconsultancy.org/'
    },
  ]

  const toggleJob = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jobData = [
    {
      title: "PHP Web Developer",
      location: "Ahmedabad",
      qualification: "Graduation",
      experience: "2-3 Years",
      description: [
        "We are looking for the position of PHP Web Developer who is energetic, passionate & highly motivated real time experienced Programmer.",
        "Responsible for design, development, and maintenance of the website development projects.",
        "Should have hands on experience with CMS (WordPress, Drupal, Joomla, Magento)",
        "Proficiency in WordPress Theme and plugin customization.",
        "Strong Core PHP, WAMP, MySQL, JavaScript, HTML, CSS, XML, jQuery, Ajax",
        "Strong knowledge in OOPS, Open Source Concepts.",
        "Extensive knowledge of Code Igniter.",
        "Zend, CakePHP, Bootstrap, Laravel framework would be an added advantage.",
        "Good experience in web applications.",
        "Should have good understanding of design principles like color, typography, layout design.",
        "Should have good interpersonal and communication skills.",
        "Should have very good analytical skills.",
        "Quest to know new technology, Candidate with Innovative thinking, Open to adapt out of box thinking."
      ],
      skills:
        "Core PHP, WordPress, HTML/CSS, Bootstrap, jQuery, JavaScript, MySQL, Drupal, Joomla, Magento, AngularJS, CodeIgniter, Zend, CakePHP, Laravel.",
      education:
        "Bachelor’s Degree preferred in Computer Science or related fields."
    },
    {
      title: "Jr. PHP Web Developer",
      location: "Ahmedabad",
      qualification: "Graduation",
      experience: "0-2 Years",
      description: [
        "Assist in website development projects.",
        "Learn and work with CMS like WordPress, Drupal, Joomla.",
        "Basic understanding of PHP, MySQL, JavaScript, HTML, CSS.",
        "Good communication and problem-solving skills."
      ],
      skills:
        "PHP, MySQL, HTML, CSS, JavaScript, WordPress, Joomla, Drupal.",
      education:
        "Bachelor’s Degree preferred in Computer Science or related fields."
    }
    ,
    {
      title: "Digital Marketing Executive (Intern / Trainee)",
      location: "Remote / Ahmedabad",
      qualification: "Any Graduate",
      experience: "Fresher / 0-1 Year (Internship)",
      description: [
        "Assist in planning and executing digital marketing campaigns across social and search channels.",
        "Support content creation for blogs, social media posts and ad copy.",
        "Help with basic SEO tasks: keyword research, on-page checks, and performance tracking.",
        "Monitor campaign performance and prepare simple reports.",
        "Learn to run paid campaigns (Google Ads / Facebook Ads) under guidance.",
        "Coordinate with design and development teams for creatives and landing pages."
      ],
      skills:
        "Basic understanding of Social Media, SEO fundamentals, Content Writing, Google Analytics (basic), eagerness to learn paid ads.",
      education:
        "Any degree; marketing or related background preferred but not mandatory."
    },
    {
      title: "Graphics & Web Designer",
      description: [
        "Create engaging and visually appealing website designs.",
        "Proficient in Adobe Photoshop, Illustrator, Figma or similar tools.",
        "Convert designs into HTML/CSS with responsive layouts.",
        "Work closely with developers to ensure accurate implementation.",
        "Stay updated with the latest design trends."
      ],
      skills: "Adobe Photoshop, Illustrator, Figma, HTML, CSS, Responsive Design.",
      education: "Bachelor’s Degree in Design, Multimedia, or related field preferred.",
      location: "Ahmedabad",
      qualification: "Graduation",
      experience: "1-2 YEARS"
    },
    {
      title: "Business Development Executive (BDE)",
      description: [
        "Identify new business opportunities and manage client relationships.",
        "Prepare and deliver pitches to potential clients.",
        "Coordinate with technical teams to understand project requirements.",
        "Achieve sales targets and contribute to company growth.",
        "Maintain CRM and prepare regular sales reports."
      ],
      skills: "Communication Skills, Negotiation, Client Relationship Management, Presentation Skills.",
      education: "Bachelor’s Degree in Business, Marketing, or related field.",
      location: "Ahmedabad",
      qualification: "Graduation",
      experience: "1-3 YEARS"
    }
  ];

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
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  {/* Button for project link */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded transition-colors duration-300"
                    >
                      View Project
                    </a>
                  )}
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


      <div className="max-w-4xl mx-auto p-6 bg-red">
        <h2 className="text-3xl font-bold text-center mb-8">
          Current Openings
        </h2>
        {jobData.map((job, index) => (
          <div key={index} className="border rounded mb-4">
            <button
              onClick={() => toggleJob(index)}
              className="w-full flex justify-between items-center bg-gradient-custom text-white px-4 py-3 font-semibold"
            >
              {job.title}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-slate-900 p-4 text-white-800">
                    <ul className="list-disc pl-6 space-y-1">
                      {job.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <div className="bg-green-50 border text-black border-green-300 p-3 mt-4">
                      <p>
                        <strong>Skills:</strong> {job.skills}
                      </p>
                      <p className="text-green-600 font-semibold">
                        Required education
                      </p>
                      <p>{job.education}</p>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <p>
                        <strong>LOCATION:</strong> {job.location}
                      </p>
                      <p>
                        <strong>QUALIFICATION:</strong> {job.qualification}
                      </p>
                      <p>
                        <strong>EXPERIENCE:</strong> {job.experience}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
                    >
                      <Link href="/career">Apply Now</Link>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
