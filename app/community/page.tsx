'use client'

import { useState } from 'react'
import { GiWaves, GiHeartWings, GiPartyPopper } from 'react-icons/gi'
import { FaUsers, FaCalendarAlt, FaStar, FaFire } from 'react-icons/fa'

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('feed')

  const feedPosts = [
    {
      id: '1',
      user: 'WaveRider',
      avatar: '🌊',
      text: 'Hit 90 days today! Never thought I could do it. Thank you all for the support! 🎉',
      likes: 24,
      comments: 8,
      time: '2 hours ago',
      tags: ['Milestone', 'Celebration']
    },
    {
      id: '2',
      user: 'NewDawn',
      avatar: '🌅',
      text: 'Having a rough day but I know I dont have to use. Reading your stories helps.',
      likes: 18,
      comments: 12,
      time: '4 hours ago',
      tags: ['Struggle', 'Support']
    },
    {
      id: '3',
      user: 'OceanSoul',
      avatar: '🐚',
      text: 'Just finished my first week of outpatient program. One day at a time, right?',
      likes: 31,
      comments: 15,
      time: '6 hours ago',
      tags: ['Progress', 'Treatment']
    }
  ]

  const events = [
    {
      title: 'Friday Night Game Night',
      date: 'Every Friday',
      time: '8:00 PM EST',
      attendees: 23,
      description: 'Board games, card games, and good vibes. No substances needed!'
    },
    {
      title: 'Sunday Morning Beach Walk',
      date: 'Every Sunday',
      time: '9:00 AM EST',
      attendees: 15,
      description: 'Virtual beach walk together. Share your view and your thoughts.'
    },
    {
      title: 'Book Club: Recovery Reads',
      date: 'Bi-weekly Wednesday',
      time: '7:00 PM EST',
      attendees: 12,
      description: 'Reading and discussing books about recovery and wellness.'
    }
  ]

  const milestones = [
    { user: 'Sarah M.', days: 365, badge: '🏆' },
    { user: 'James K.', days: 180, badge: '⭐' },
    { user: 'Maria L.', days: 90, badge: '🌟' },
    { user: 'Alex R.', days: 30, badge: '🔥' }
  ]

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FaUsers className="text-6xl mx-auto text-wave mb-4" />
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            Our{' '}
            <span className="gradient-text">Community</span>
          </h1>
          <p className="text-sand/60 text-lg max-w-2xl mx-auto">
            You are part of something bigger. Share, connect, and grow together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass p-4 rounded-2xl text-center">
            <div className="text-3xl font-display gradient-text">1,247</div>
            <div className="text-xs text-sand/60 mt-1">Members</div>
          </div>
          <div className="glass p-4 rounded-2xl text-center">
            <div className="text-3xl font-display gradient-text">8,432</div>
            <div className="text-xs text-sand/60 mt-1">Messages Today</div>
          </div>
          <div className="glass p-4 rounded-2xl text-center">
            <div className="text-3xl font-display gradient-text">156</div>
            <div className="text-xs text-sand/60 mt-1">Sober Days Combined</div>
          </div>
          <div className="glass p-4 rounded-2xl text-center">
            <div className="text-3xl font-display gradient-text">24/7</div>
            <div className="text-xs text-sand/60 mt-1">Support Available</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8 border-b border-ocean/20">
          <button
            onClick={() => setActiveTab('feed')}
            className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
              activeTab === 'feed' 
                ? 'text-wave border-b-2 border-wave' 
                : 'text-sand/60 hover:text-sand'
            }`}
          >
            Community Feed
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
              activeTab === 'events' 
                ? 'text-wave border-b-2 border-wave' 
                : 'text-sand/60 hover:text-sand'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab('milestones')}
            className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
              activeTab === 'milestones' 
                ? 'text-wave border-b-2 border-wave' 
                : 'text-sand/60 hover:text-sand'
            }`}
          >
            Milestones
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'feed' && (
          <div className="space-y-6">
            {/* Create Post */}
            <div className="glass p-4 rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean to-wave flex items-center justify-center text-xl">
                  🌊
                </div>
                <input
                  type="text"
                  placeholder="Share something with the community..."
                  className="input-beach flex-1"
                />
              </div>
            </div>

            {/* Feed Posts */}
            {feedPosts.map((post) => (
              <div key={post.id} className="card">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="text-3xl">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sand">{post.user}</h3>
                      <span className="text-xs text-sand/40">{post.time}</span>
                    </div>
                    <p className="text-sand/80 mt-2">{post.text}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-ocean/20 text-wave px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 mt-4 text-sm text-sand/40">
                      <button className="hover:text-wave transition-colors">
                        <FaHeart className="inline mr-1" />
                        {post.likes}
                      </button>
                      <button className="hover:text-wave transition-colors">
                        <FaStar className="inline mr-1" />
                        {post.comments} comments
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="card">
                <GiPartyPopper className="text-4xl text-coral mb-4" />
                <h3 className="text-xl font-semibold text-sand mb-2">{event.title}</h3>
                <div className="space-y-2 text-sm text-sand/60 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-wave" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="text-wave" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <p className="text-sand/60 text-sm mb-4">{event.description}</p>
                <button className="btn-primary w-full text-sm">Join Event</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'milestones' && (
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="card flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{milestone.badge}</div>
                  <div>
                    <h3 className="font-semibold text-sand">{milestone.user}</h3>
                    <p className="text-sm text-sand/60">{milestone.days} days sober</p>
                  </div>
                </div>
                <FaFire className="text-2xl text-sunset" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
