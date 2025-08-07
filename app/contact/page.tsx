'use client'

import { useState } from 'react'
import { Send, Upload, User, Mail, Phone, MessageSquare, MapPin, Clock, Globe } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    projectDetails: '',
    hireDeveloper: '',
    file: null as File | null,
    captcha: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const developerTypes = [
    'Web Developer',
    'Software Developer',
    'UI/UX Designer',
    'Mobile App Developer',
    'Full Stack Developer',
    'DevOps Engineer'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      file: file
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.captcha) {
      alert('Please verify that you are not a robot.')
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert('Message sent successfully! We will get back to you soon.')
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      projectDetails: '',
      hireDeveloper: '',
      file: null,
      captcha: false
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/contact-us-communication.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with our team and let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-gray-400 text-lg mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                    <p className="text-gray-400">210, Sahitya Arcade, Haridarshan Cross Road</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-400">+44 7404 758487</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-400">Snapwisesolutions@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="mt-8">
  <h3 className="text-xl font-semibold mb-4">Find Us</h3>
  <div className="bg-slate-700 rounded-lg p-4 h-[370px] flex items-center justify-center">
    <div className="text-center w-full h-full relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2068.99898860509!2d-0.3053947241391174!3d51.58792940481815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487613ed892e9c4b%3A0xb62299d1f0e996f0!2s36%20Kenton%20Park%20Ave%2C%20Harrow%20HA3%208DN%2C%20UK!5e1!3m2!1sen!2sin!4v1754290022780!5m2!1sen!2sin"
        className="w-full h-[340px] rounded-lg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute bottom-4 left-0 right-0">
        {/* <Globe className="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-400">Interactive Map</p>
        <p className="text-gray-500 text-sm">123 Tech Street, Digital City</p> */}
      </div>
    </div>
  </div>
</div>

            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-700 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Project Details *
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                      placeholder="Describe your project requirements..."
                    />
                  </div>

                  {/* Hire Dedicated Developer */}
                  <div>
                    <label htmlFor="hireDeveloper" className="block text-sm font-medium text-gray-300 mb-2">
                      Hire Dedicated Developer
                    </label>
                    <select
                      id="hireDeveloper"
                      name="hireDeveloper"
                      value={formData.hireDeveloper}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    >
                      <option value="">Select developer type (optional)</option>
                      {developerTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      <Upload className="w-4 h-4 inline mr-2" />
                      File Upload
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600"
                    />
                    <p className="text-gray-400 text-sm mt-1">Upload project documents, wireframes, or requirements (Max 10MB)</p>
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="captcha"
                      name="captcha"
                      checked={formData.captcha}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 text-emerald-500 bg-slate-600 border-slate-500 rounded focus:ring-emerald-500"
                    />
                    <label htmlFor="captcha" className="text-gray-300">
                      I am not a robot *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
