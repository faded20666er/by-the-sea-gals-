'use client'

import { useState } from 'react'
import { GiWaves, GiBookmarklet, GiHealthNormal, GiPhone } from 'react-icons/gi'
import { FaBook, FaVideo, FaLink, FaDownload, FaSearch } from 'react-icons/fa'

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚' },
    { id: 'crisis', name: 'Crisis Support', icon: '🆘' },
    { id: 'articles', name: 'Articles & Guides', icon: '📖' },
    { id: 'hotlines', name: 'Hotlines', icon: '📞' },
    { id: 'apps', name: 'Apps & Tools', icon: '📱' },
    { id: 'local', name: 'Local Resources', icon: '📍' }
  ]

  const resources = [
    {
      id: '1',
      category: 'crisis',
      title: '988 Suicide & Crisis Lifeline',
      description: 'Call or text 988 for immediate crisis support. Available 24/7.',
      type: 'hotline',
      link: 'tel:988',
      icon: '🆘',
      urgent: true
    },
    {
      id: '2',
      category: 'crisis',
      title: 'SAMHSA National Helpline',
      description: '1-800-662-4357 - Free, confidential, 24/7 treatment referral.',
      type: 'hotline',
      link: 'tel:1-800-662-4357',
      icon: '📞',
      urgent: true
    },
    {
      id: '3',
      category: 'articles',
      title: 'Understanding Addiction as a Disease',
      description: 'Learn about the science behind addiction and recovery.',
      type: 'article',
      link: '#',
      icon: '📖'
    },
    {
      id: '4',
      category: 'articles',
      title: '10 Coping Strategies for Cravings',
      description: 'Practical techniques to manage urges and stay on track.',
      type: 'article',
      link: '#',
      icon: '💪'
    },
    {
      id: '5',
      category: 'apps',
      title: 'I Am Sober - Tracking App',
      description: 'Track your sobriety journey with daily motivation.',
      type: 'app',
      link: '#',
      icon: '📱'
    },
    {
      id: '6',
      category: 'apps',
      title: 'Calm - Meditation & Sleep',
      description: 'Guided meditations and sleep stories for recovery.',
      type: 'app',
      link: '#',
      icon: '🧘'
    },
    {
      id: '7',
      category: 'local',
      title: 'Find AA Meetings Near You',
      description: 'Locate Alcoholics Anonymous meetings in your area.',
      type: 'directory',
      link: '#',
      icon: '📍'
    },
    {
      id: '8',
      category: 'local',
      title: 'NA Meeting Locator',
      description: 'Find Narcotics Anonymous meetings worldwide.',
      type: 'directory',
      link: '#',
      icon: '📍'
    },
    {
      id: '9',
      category: 'articles',
      title: 'Building a Support Network',
      description: 'How to create and maintain healthy relationships in recovery.',
      type: 'guide',
      link: '#',
      icon: '🤝'
    },
    {
      id: '10',
      category: 'articles',
      title: 'Nutrition Guide for Recovery',
      description: 'Healing your body through proper nutrition during recovery.',
      type: 'guide',
      link: '#',
      icon: '🥗'
    },
    {
      id: '11',
      category: 'hotlines',
      title: 'Crisis Text Line',
      description: 'Text HOME to 741741 for free crisis counseling.',
      type: 'hotline',
      link: 'sms:741741',
      icon: '💬',
      urgent: true
    },
    {
      id: '12',
      category: 'apps',
      title: 'Sober Grid - Social App',
      description: 'Connect with a global community of sober individuals.',
      type: 'app',
      link: '#',
      icon: '🌐'
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <GiBookmarklet className="text-6xl mx-auto text-wave mb-4" />
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            Recovery{' '}
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-sand/60 text-lg max-w-2xl mx-auto">
            Curated tools, information, and support services to help you on your journey.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sand/40" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-beach pl-12"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-ocean to-wave text-white shadow-lg'
                  : 'glass text-sand/60 hover:text-sand hover:bg-white/10'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Urgent Support Banner */}
        <div className="glass p-6 rounded-3xl mb-8 border-2 border-sunset/30 bg-sunset/5">
          <div className="flex items-start space-x-4">
            <GiPhone className="text-4xl text-sunset flex-shrink-0 animate-pulse" />
            <div>
              <h3 className="text-xl font-semibold text-sunset mb-2">Need Immediate Help?</h3>
              <p className="text-sand/80 mb-4">
                If you&apos;re in crisis or need someone to talk to right now, help is available 24/7.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:988" className="btn-primary bg-gradient-to-r from-sunset to-coral text-sm">
                  Call 988
                </a>
                <a href="sms:741741" className="btn-secondary border-sunset text-sunset text-sm">
                  Text HOME to 741741
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              target={resource.link.startsWith('http') ? '_blank' : undefined}
              rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`card group block ${
                resource.urgent ? 'border-sunset/30 hover:border-sunset/50' : ''
              }`}
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-lg font-semibold text-sand group-hover:text-wave transition-colors mb-2">
                {resource.title}
              </h3>
              <p className="text-sand/60 text-sm mb-4">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-sand/40 capitalize">{resource.type}</span>
                <span className="text-wave group-hover:translate-x-1 transition-transform">
                  <FaLink />
                </span>
              </div>
              {resource.urgent && (
                <div className="mt-3 flex items-center space-x-1 text-xs text-sunset">
                  <span className="w-2 h-2 bg-sunset rounded-full animate-pulse" />
                  <span>Available now</span>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Download Section */}
        <div className="mt-12 glass p-8 rounded-3xl">
          <div className="text-center">
            <FaDownload className="text-4xl text-wave mx-auto mb-4" />
            <h2 className="text-2xl font-display gradient-text mb-4">
              Download Our Recovery Kit
            </h2>
            <p className="text-sand/60 mb-6 max-w-lg mx-auto">
              Get our complete recovery toolkit including journal templates, 
              coping strategies cards, and emergency contact templates.
            </p>
            <button className="btn-primary">
              <FaDownload className="inline mr-2" />
              Download Free Recovery Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
