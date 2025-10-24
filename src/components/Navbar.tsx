import Link from 'next/link'

export default function Navbar() {
  // feste Navigationslinks (deterministisch)
  const links = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/host', label: 'Host' },
    { href: '/profile', label: 'Profile' },
    { href: '/login', label: 'Login' },
  ]

  return (
    <header style={{display: "flex", borderBottomWidth: "0.8px", borderBottomColor: "oklab(0 0 0 / 0.06)", flexDirection: "column", fontWeight: 400, width: "100%"}} className="site-header w-full" role="banner">
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{display: "flex", alignItems: "center", fontWeight: 400, justifyContent: "space-between", width: "100%", padding: "12px 16px"}}
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
