import Hero from '@/components/Hero'
import Link from 'next/link'
import { GiWaves, GiChatBubble, GiVideoConference, GiHeartWings, GiBookmarklet, GiLifeBar } from 'react-icons/gi'
import { FaUsers, FaHandHoldingHeart } from 'react-icons/fa'

export default function Home() {
  const features = [
    {
      icon: <GiChatBubble className="text-4xl" />,
      title: 'Live Chat',
      description: 'Connect instantly with others on the same journey. Share, vent, or just listen.',
      color: 'from-ocean to-wave',
      link: '/chat'
    },
    {
      icon: <GiVideoConference className="text-4xl" />,
      title: 'Video Support Groups',
      description: 'Face-to-face connection from the safety of your space. Multiple groups daily.',
      color: 'from-sunset to-coral',
      link: '/video'
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Community Forums',
      description: 'Share your story, ask questions, and build lasting friendships.',
      color: 'from-seafoam to-seafoam-dark',
      link: '/community'
    },
    {
      icon: <GiBookmarklet className="text-4xl" />,
      title: 'Resource Library',
      description: 'Curated tools, articles, and local resources to support your recovery.',
      color: 'from-ocean-light to-wave-light',
      link: '/resources'
    },
    {
      icon: <GiHeartWings className="text-4xl" />,
      title: 'Sober Social Events',
      description: 'Virtual meetups, game nights, and wellness activities. Fun without substances.',
      color: 'from-coral to-sunset-light',
      link: '/community'
    },
    {
      icon: <GiLifeBar className="text-4xl" />,
      title: '24/7 Crisis Support',
      description: 'Trained peer supporters available anytime. You are never alone.',
      color: 'from-driftwood to-driftwood-light',
      link: '/chat'
    }
  ]

  const testimonials = [
    {
      quote: "This community saved my life. I found people who actually understand.",
      author: "Sarah M.",
      role: "2 years sober"
    },
    {
      quote: "The video calls feel like a real meeting. I can be myself without judgment.",
      author: "James K.",
      role: "18 months clean"
    },
    {
      quote: "I thought I was alone in this fight. Free By The Sea'Gals showed me I'm not.",
      author: "Maria L.",
      role: "Community Member"
    }
  ]

  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Everything You Need for{' '}
              <span className="gradient-text">Recovery</span>
            </h2>
            <p className="text-sand/60 text-lg max-w-2xl mx-auto">
              A complete ecosystem of support, connection, and growth tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link href={feature.link} key={index}>
                <div className="card group cursor-pointer h-full">
                  <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-sand mb-2 group-hover:text-wave transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sand/60 text-sm">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Voices of the{' '}
              <span className="gradient-text">Community</span>
            </h2>
            <p className="text-sand/60 text-lg">
              Real stories from real people on their journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4 text-wave">"</div>
                <p className="text-sand/80 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-ocean/30 pt-4">
                  <p className="font-semibold text-sand">{testimonial.author}</p>
                  <p className="text-sm text-wave">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-12 rounded-3xl">
            <GiWaves className="text-6xl mx-auto text-wave mb-6" />
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Ready to Make a Change?
            </h2>
            <p className="text-sand/60 text-lg mb-8 max-w-2xl mx-auto">
              Every journey begins with a single step. Take yours today in a safe, 
              judgment-free space where everyone understands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chat" className="btn-primary text-lg px-10 py-4">
                <FaHandHoldingHeart className="inline-block mr-2" />
                Start Your Journey
              </Link>
              <Link href="/resources" className="btn-secondary text-lg px-10 py-4">
                Learn More First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
