'use client'

import { useState } from 'react'
import { GiWaves, GiVideoConference } from 'react-icons/gi'
import { FaUsers, FaClock, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa'

export default function VideoPage() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  const groups = [
    {
      id: '1',
      name: 'Morning Wave',
      time: '8:00 AM EST',
      description: 'Start your day with intention and support',
      attendees: 12,
      maxAttendees: 20,
      host: 'Sarah M.',
      tags: ['Daily Check-in', 'All Welcome']
    },
    {
      id: '2',
      name: 'Midday Anchor',
      time: '1:00 PM EST',
      description: 'Midday check-in and group discussion',
      attendees: 8,
      maxAttendees: 15,
      host: 'James K.',
      tags: ['Discussion', 'Support']
    },
    {
      id: '3',
      name: 'Sunset Serenity',
      time: '7:00 PM EST',
      description: 'Evening wind-down and reflection',
      attendees: 18,
      maxAttendees: 25,
      host: 'Maria L.',
      tags: ['Meditation', 'Reflection']
    },
    {
      id: '4',
      name: 'Late Night Harbor',
      time: '11:00 PM EST',
      description: 'Late night support for those who need it',
      attendees: 5,
      maxAttendees: 15,
      host: 'Alex R.',
      tags: ['Crisis Support', 'Late Night']
    }
  ]

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <GiVideoConference className="text-6xl mx-auto text-wave mb-4" />
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            Video Support{' '}
            <span className="gradient-text">Groups</span>
          </h1>
          <p className="text-sand/60 text-lg max-w-2xl mx-auto">
            Face-to-face connection from the comfort and safety of your space. 
            All groups are moderated and confidential.
          </p>
        </div>

        {/* Safety Notice */}
        <div className="glass p-4 rounded-2xl mb-8 flex items-center space-x-3">
          <FaShieldAlt className="text-2xl text-seafoam flex-shrink-0" />
          <p className="text-sm text-sand/80">
            All video calls are encrypted and anonymous. Your identity is protected. 
            Cameras are optional - you can join with audio only.
          </p>
        </div>

        {/* Active Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div key={group.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-sand">{group.name}</h3>
                  <div className="flex items-center space-x-2 text-sand/60 text-sm mt-1">
                    <FaClock />
                    <span>{group.time}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <FaUsers className="text-wave" />
                  <span className="text-sand/60">
                    {group.attendees}/{group.maxAttendees}
                  </span>
                </div>
              </div>
              
              <p className="text-sand/60 text-sm mb-4">{group.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {group.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-ocean/20 text-wave px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-sand/40">Hosted by {group.host}</span>
                <button 
                  onClick={() => setSelectedGroup(group.id)}
                  className="btn-primary text-sm"
                >
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Jitsi Meet Integration */}
        {selectedGroup && (
          <div className="mt-12 glass p-6 rounded-3xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-display gradient-text mb-2">
                Video Conference Room
              </h2>
              <p className="text-sand/60">
                You are in a safe, moderated space. Be respectful and supportive.
              </p>
            </div>
            
            {/* Jitsi Meet iframe */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-night-sky">
              <iframe
                src={`https://meet.jit.si/FreeByTheSeagals-${selectedGroup}`}
                allow="camera; microphone; fullscreen; display-capture"
                className="w-full h-full"
                title="Video Conference"
              />
            </div>
            
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setSelectedGroup(null)}
                className="btn-secondary"
              >
                Leave Room
              </button>
            </div>
          </div>
        )}

        {/* Schedule Info */}
        <div className="mt-12 glass p-6 rounded-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <FaCalendarAlt className="text-2xl text-coral" />
            <h3 className="text-xl font-semibold text-sand">Group Schedule</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 text-sand/60">
              <div className="w-3 h-3 rounded-full bg-ocean" />
              <span>Morning Wave - 8:00 AM EST</span>
            </div>
            <div className="flex items-center space-x-3 text-sand/60">
              <div className="w-3 h-3 rounded-full bg-wave" />
              <span>Midday Anchor - 1:00 PM EST</span>
            </div>
            <div className="flex items-center space-x-3 text-sand/60">
              <div className="w-3 h-3 rounded-full bg-sunset" />
              <span>Sunset Serenity - 7:00 PM EST</span>
            </div>
            <div className="flex items-center space-x-3 text-sand/60">
              <div className="w-3 h-3 rounded-full bg-seafoam" />
              <span>Late Night Harbor - 11:00 PM EST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
