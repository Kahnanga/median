"use client";

import React from "react";
import Link from "next/link";

function FeatureCard({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="feature-card bg-white dark:bg-[#0a0a0a] rounded-lg border border-black/[.06] p-6 flex items-start gap-4">
      <div className="feature-icon w-10 h-10 flex items-center justify-center rounded-md bg-foreground text-background">{children}</div>
      <div className="feature-body">
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function HostSection() {
  return (
    <section className="host-section w-full">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="host-content bg-transparent rounded-lg p-6">
          <div className="host-top text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Host your own tournament with ease.</h2>
            <p className="text-base text-muted-foreground max-w-prose mx-auto">
              Create, manage, and promote your tournaments in minutes. Challenger gives you everything you need to handle
              registrations, participant lists, payments, and communication — all in one place.
            </p>

            <div className="host-actions flex justify-center gap-4 mt-6">
              <Link href="/host" className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-foreground text-background font-medium shadow-sm">
                Host an Event
              </Link>

              <Link href="/host/learn" className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-black/[.08] dark:border-white/[.12] font-medium">
                Learn More
              </Link>
            </div>
          </div>

          <div className="host-features grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Simple Management"
              description="Manage registrations, payments, and event details from one dashboard."
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 6h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </FeatureCard>

            <FeatureCard
              title="Player Overview"
              description="View and organize participants in real time."
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </FeatureCard>

            <FeatureCard
              title="Integrated Payments"
              description="Accept secure entry fees directly during registration."
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 9h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </FeatureCard>

            <FeatureCard
              title="Communication Tools"
              description="Notify players instantly about updates or changes."
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M22 12c0 5-4 9-9 9S4 17 4 12 8 3 13 3s9 4 9 9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}
