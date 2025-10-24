"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer w-full border-t border-black/[.06] bg-transparent">
      <div className="footer-inner mx-auto px-4 py-8 flex flex-row items-center gap-4" style={{margin: '0 auto', padding: '0 16px'}}>
        <div className="footer-left flex items-center gap-4 text-sm">
          <div className="brand font-semibold">Challenger:</div>
          <div className="claim text-sm text-muted-foreground">Built for players. Powered by community.</div>
        </div>

        <div className="footer-right flex items-center gap-4 text-sm">
          <div className="copyright text-sm text-muted-foreground">© 2025 Challenger. All rights reserved.</div>
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
