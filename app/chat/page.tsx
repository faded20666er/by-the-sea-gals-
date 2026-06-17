'use client'

import { useState, useEffect, useRef } from 'react'
import { GiWaves } from 'react-icons/gi'
import { FaPaperPlane, FaUserCircle, FaShieldAlt } from 'react-icons/fa'
import { format } from 'date-fns'

interface Message {
  id: string
  user: string
  text: string
  timestamp: Date
  isAnonymous: boolean
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      user: 'System',
      text: 'Welcome to the recovery chat. You are not alone. 🌊',
      timestamp: new Date(),
      isAnonymous: true
    },
    {
      id: '2',
      user: 'WaveRider',
      text: 'Day 30 clean today! Feeling hopeful for the first time in years.',
      timestamp: new Date(Date.now() - 60000),
      isAnonymous: true
    },
    {
      id: '3',
      user: 'NewDawn',
      text: 'Thats amazing WaveRider! Im on day 5 and this gives me hope.',
      timestamp: new Date(Date.now() - 30000),
      isAnonymous: true
    }
  ])
  
  const [newMessage, setNewMessage] = useState('')
  const [username, setUsername] = useState('')
  const [isJoined, setIsJoined] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      setIsJoined(true)
    }
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      user: username || 'Anonymous',
      text: newMessage,
      timestamp: new Date(),
      isAnonymous: true
    }

    setMessages([...messages, message])
    setNewMessage('')
  }

  if (!isJoined) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass p-8 rounded-3xl max-w-md w-full text-center">
          <GiWaves className="text-6xl mx-auto text-wave mb-6" />
          <h1 className="text-3xl font-display mb-4">
            Join the <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-sand/60 mb-8">
            Choose a username to start chatting. Everything is anonymous and safe.
          </p>
          <form onSubmit={handleJoin} className="space-y-4">
            <input
              type="text"
              placeholder="Choose your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-beach"
              maxLength={20}
              required
            />
            <button type="submit" className="btn-primary w-full">
              <FaShieldAlt className="inline-block mr-2" />
              Enter Chat Safely
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col px-4 py-8">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="glass p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GiWaves className="text-2xl text-wave" />
            <div>
              <h2 className="font-semibold text-sand">Recovery Chat</h2>
              <p className="text-xs text-sand/60">12 people online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sand/40 text-sm">
            <FaShieldAlt />
            <span>Anonymous</span>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto glass p-4 space-y-4 min-h-[400px] max-h-[600px]">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-3">
              <FaUserCircle className="text-2xl text-ocean-light flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-wave text-sm">{message.user}</span>
                  <span className="text-xs text-sand/40">
                    {format(message.timestamp, 'HH:mm')}
                  </span>
                </div>
                <p className="text-sand/80 mt-1">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="glass p-4 rounded-b-2xl mt-0">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Share your thoughts..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="input-beach flex-1"
              maxLength={500}
            />
            <button
              type="submit"
              className="btn-primary px-6"
              disabled={!newMessage.trim()}
            >
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
