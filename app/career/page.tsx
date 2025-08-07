'use client'

import { useState } from 'react'
import { Send, Upload, User, Mail, Phone, Briefcase, Calendar, DollarSign, Building, Clock, MessageSquare } from 'lucide-react'

export default function CareerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    applyFor: '',
    yearsOfExperience: '',
    currentCTC: '',
    expectedCTC: '',
    currentCompany: '',
    noticePeriod: '',
    additionalMessage: '',
    resume: null as File | null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const positions = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Mobile App Developer',
    'UI/UX Designer',
    'DevOps Engineer',
    'Project Manager',
    'Quality Assurance Engineer',
    'Data Scientist',
    'Business Analyst'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      resume: file
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Application submitted successfully! We will get back to you soon.')
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      applyFor: '',
      yearsOfExperience: '',
      currentCTC: '',
      expectedCTC: '',
      currentCompany: '',
      noticePeriod: '',
      additionalMessage: '',
      resume: null
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/tech-team-careers.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build your career with Snapwise Solutions. We're looking for passionate individuals to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 text-lg">Join a team that values innovation, growth, and work-life balance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-gray-400">Continuous learning and career advancement opportunities</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exciting Projects</h3>
              <p className="text-gray-400">Work on cutting-edge technologies and challenging projects</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-gray-400">Flexible working hours and remote work options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply Now</h2>
            <p className="text-gray-400 text-lg">Fill out the form below to start your journey with us</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  placeholder="Enter your last name"
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
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
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
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Apply For */}
              <div>
                <label htmlFor="applyFor" className="block text-sm font-medium text-gray-300 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Apply For (Position) *
                </label>
                <select
                  id="applyFor"
                  name="applyFor"
                  value={formData.applyFor}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                >
                  <option value="">Select a position</option>
                  {positions.map((position) => (
                    <option key={position} value={position}>{position}</option>
                  ))}
                </select>
              </div>

              {/* Years of Experience */}
              <div>
                <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Years of Experience *
                </label>
                <input
                  type="number"
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  required
                  min="0"
                  max="50"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  placeholder="Enter years of experience"
                />
              </div>

              {/* Current CTC */}
              <div>
                <label htmlFor="currentCTC" className="block text-sm font-medium text-gray-300 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Current CTC
                </label>
                <input
                  type="text"
                  id="currentCTC"
                  name="currentCTC"
                  value={formData.currentCTC}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  placeholder="Enter current CTC (e.g., 5 LPA)"
                />
              </div>

              {/* Expected CTC */}
              <div>
                <label htmlFor="expectedCTC" className="block text-sm font-medium text-gray-300 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Expected CTC *
                </label>
                <input
                  type="text"
                  id="expectedCTC"
                  name="expectedCTC"
                  value={formData.expectedCTC}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  placeholder="Enter expected CTC (e.g., 7 LPA)"
                />
              </div>

              {/* Current Company */}
              <div>
                <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-300 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Current Company
                </label>
                <input
                  type="text"
                  id="currentCompany"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  placeholder="Enter current company name"
                />
              </div>

              {/* Notice Period */}
              <div>
                <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-300 mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Notice Period *
                </label>
                <select
                  id="noticePeriod"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                >
                  <option value="">Select notice period</option>
                  <option value="Immediate">Immediate</option>
                  <option value="15 days">15 days</option>
                  <option value="1 month">1 month</option>
                  <option value="2 months">2 months</option>
                  <option value="3 months">3 months</option>
                </select>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="mt-6">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                <Upload className="w-4 h-4 inline mr-2" />
                Upload Resume *
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600"
              />
              <p className="text-gray-400 text-sm mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            {/* Additional Message */}
            <div className="mt-6">
              <label htmlFor="additionalMessage" className="block text-sm font-medium text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Additional Message
              </label>
              <textarea
                id="additionalMessage"
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                placeholder="Tell us why you want to join our team..."
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
