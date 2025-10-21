'use client'

import Link from 'next/link'

export default function Navbar() {
  // feste Navigationslinks (deterministisch)
  const links = [
    { href: '/', label: 'Home' },
    { href: '/host', label: 'Host' },
    { href: '/profile', label: 'Profile' },
    { href: '/login', label: 'Login' },
  ]

  return (
    <header
      className="
        site-header
        w-full
        border-b border-black/[.06]
        bg-transparent
      "
      role="banner"
    >
      <nav
        className="
          nav-container
          flex justify-between items-center
          max-w-5xl mx-auto
          px-4 py-3
        "
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Markenname / Logo */}
        <div className="brand">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Challenger
          </Link>
        </div>

        {/* Hauptnavigation */}
        <ul className="nav-list flex gap-5 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="
                  text-sm font-medium hover:underline
                  transition-colors duration-150
                "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
