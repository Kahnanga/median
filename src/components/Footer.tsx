"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer w-full border-t border-black/[.06] bg-transparent">
      <div className="footer-inner max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="footer-left text-sm">
          <div className="brand text-lg font-semibold">Challenger</div>
          <div className="claim text-xs text-muted-foreground mt-1">Built for players. Powered by community.</div>
          <div className="copyright text-xs text-muted-foreground mt-2">© 2025 Challenger. All rights reserved.</div>
        </div>

        <div className="footer-right">
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/impressum" className="text-sm hover:underline">
                  Impressum
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
