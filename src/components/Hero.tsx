"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="hero-section w-full">
      <div className="hero-container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-12">
        {/* Left: image */}
        <div className="hero-image w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1600&q=80&auto=format&fit=crop"
            alt="Community competition or tournament"
            className="w-full h-80 md:h-[420px] object-cover block"
            loading="eager"
          />
        </div>

        {/* Right: content */}
        <div className="hero-content flex flex-col gap-6">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Join. Compete. Celebrate.
          </h1>

          <p className="hero-description text-base text-muted-foreground max-w-prose">
            Discover exciting local tournaments or host your own event – all in one place. Challenger
            connects players, organizers, and communities.
          </p>

          <div className="hero-actions flex gap-3">
            <a
              href="/"
              className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-3 bg-foreground text-background font-medium shadow-sm hover:opacity-95"
            >
              Explore Tournaments
            </a>

            <a
              href="/host"
              className="btn-secondary inline-flex items-center justify-center rounded-full px-5 py-3 border border-black/[.08] dark:border-white/[.12] hover:bg-gray-50 dark:hover:bg-[#111] font-medium"
            >
              Host an Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
