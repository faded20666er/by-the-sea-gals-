import Link from 'next/link'
import { GiWaves } from 'react-icons/gi'
import { FaHeart, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-night-sky border-t border-ocean/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GiWaves className="text-3xl text-wave" />
              <div>
                <h3 className="text-xl font-display text-sand">
                  Free By The <span className="gradient-text">Sea&apos;Gals</span>
                </h3>
              </div>
            </Link>
            <p className="text-sand/60 text-sm max-w-md">
              A safe harbor for recovery. We believe everyone deserves a second chance 
              and the support to make it stick.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-sand/40 hover:text-wave transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-sand/40 hover:text-wave transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-sand/40 hover:text-wave transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sand font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/chat" className="text-sand/60 hover:text-wave text-sm transition-colors">Live Chat</Link></li>
              <li><Link href="/video" className="text-sand/60 hover:text-wave text-sm transition-colors">Video Groups</Link></li>
              <li><Link href="/community" className="text-sand/60 hover:text-wave text-sm transition-colors">Community</Link></li>
              <li><Link href="/resources" className="text-sand/60 hover:text-wave text-sm transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sand font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sand/60 hover:text-wave text-sm transition-colors">Crisis Hotline</a></li>
              <li><a href="#" className="text-sand/60 hover:text-wave text-sm transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-sand/60 hover:text-wave text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sand/60 hover:text-wave text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ocean/20 mt-8 pt-8 text-center">
          <p className="text-sand/40 text-sm">
            © {currentYear} Free By The Sea&apos;Gals. Made with{' '}
            <FaHeart className="inline-block text-sunset" /> for the recovery community.
          </p>
          <p className="text-sand/30 text-xs mt-2">
            If you&apos;re in crisis, call 988 or text HOME to 741741
          </p>
        </div>
      </div>
    </footer>
  )
}
