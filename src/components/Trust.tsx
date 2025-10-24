"use client";

import React from "react";

function ValueButton({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="value-button flex items-start gap-3 p-4 rounded-lg bg-white/80 dark:bg-[#0a0a0a] border border-black/[.06]">
      <div className="value-icon w-10 h-10 flex items-center justify-center rounded-md bg-foreground text-background">{icon}</div>
      <div className="value-body text-left">
        <div className="value-title text-sm font-semibold">{title}</div>
        <div className="value-desc text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="trust-section w-full bg-gray-50 dark:bg-[#071018]">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="trust-text">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why players and organizers trust Challenger</h2>
            <p className="text-base text-muted-foreground max-w-prose">
              We focus on security, reliability, and professionalism — making tournaments easy to host and enjoyable to join.
            </p>
          </div>

          <div className="trust-values grid grid-cols-2 gap-4">
            <ValueButton
              title="Secure"
              description="Verified organizers and protected payments"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2L3 6v6c0 5 3.8 9.6 9 10 5.2-.4 9-5 9-10V6l-9-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.5 12.5l1.8 1.8L15 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />

            <ValueButton
              title="Professional"
              description="Curated events with clear entry requirements"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 7h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 11h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 15h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />

            <ValueButton
              title="Timely"
              description="Real-time updates and instant confirmations"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              }
            />

            <ValueButton
              title="Regional"
              description="Coverage across 8 major chess regions"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M2 12h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M12 2v20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
