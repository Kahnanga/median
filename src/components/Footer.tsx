'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer w-full border-t border-black/[.06] bg-transparent">
      <div className="footer-inner max-w-6xl mx-auto flex flex-row justify-between items-center px-4 py-6">
        {/* Left side */}
        <div className="footer-left flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm">
          <span className="brand font-normal">Challenger:</span>
          <span className="claim text-sm text-gray-500">
            Built for players. Powered by community.
          </span>
        </div>

        {/* Right side */}
        <div className="footer-right flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm text-gray-500">
          <span>© 2025 Challenger. All rights reserved.</span>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/impressum" className="hover:underline">
                  Impressum
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
