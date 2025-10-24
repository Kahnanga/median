"use client";

import React from "react";

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="stat-card bg-white dark:bg-[#0a0a0a] rounded-lg border border-black/[.06] p-6 flex flex-col items-center text-center">
      <div className="stat-icon mb-3 text-2xl">{icon}</div>
      <div className="stat-value text-3xl md:text-4xl font-extrabold mb-1">{value}</div>
      <div className="stat-label text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { label: "Upcoming Events", value: "24", icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) },
    { label: "Registered Players", value: "1,032", icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 20c1.5-4 5-6 7-6s5.5 2 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) },
    { label: "Events Hosted", value: "132", icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 7v10a2 2 0 002 2h8a2 2 0 002-2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) },
    { label: "Registrations via Platform", value: "3,475", icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) },
  ];

  return (
    <section className="stats-section w-full">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Challenger in numbers.</h2>
        <p className="text-center text-base text-muted-foreground max-w-prose mx-auto mb-6">Our growing chess community across Germany — where players connect, compete, and organize together.</p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} icon={s.icon} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
