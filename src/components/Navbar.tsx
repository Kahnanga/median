"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header w-full border-b border-black/[.06] bg-transparent">
      <nav
        className="nav-container max-w-5xl mx-auto flex items-center justify-between px-4 py-3"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="brand">
          <Link href="/" className="brand-link text-lg font-semibold">
            Challenger
          </Link>
        </div>

        <ul className="nav-list flex gap-4 items-center">
          <li>
            <Link href="/" className="nav-link text-sm font-medium hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/host" className="nav-link text-sm font-medium hover:underline">
              Host
            </Link>
          </li>
          <li>
            <Link href="/profile" className="nav-link text-sm font-medium hover:underline">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/login" className="nav-link text-sm font-medium hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
