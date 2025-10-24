'use client'

import Link from 'next/link'

/* -----------------------------------
 * Left part of the footer
 * ----------------------------------- */
function FooterLeft() {
  return (
    <div className="footer-left flex items-center gap-4 text-sm text-gray-200">
      <p className="brand">
        <span className="font-medium text-white">Challenger:</span>{' '}
        Built for players. Powered by community.
      </p>
    </div>
  )
}

/* -----------------------------------
 * Right part of the footer
 * ----------------------------------- */
function FooterRight() {
  return (
    <div className="footer-right flex items-center gap-4 text-sm text-gray-400">
      <span>© 2025 Challenger. All rights reserved.</span>
      <nav aria-label="Footer navigation">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/impressum" className="hover:underline text-gray-200 hover:text-white">
              Impressum
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

/* -----------------------------------
 * Main Footer component
 * ----------------------------------- */
export default function Footer() {
  return (
    <footer className="site-footer w-full border-t border-white/10 bg-neutral-900 text-white">
      <div className="footer-inner max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-8 gap-4">
        <FooterLeft />
        <FooterRight />
      </div>
    </footer>
  )
}
