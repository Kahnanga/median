"use client";

import Link from "next/link";

type Props = {
  title: string;
  date: string;
  location: string;
  registerHref?: string;
  infoHref?: string;
};

export default function TournamentCard({
  title,
  date,
  location,
  registerHref = "#",
  infoHref = "#",
}: Props) {
  return (
    <article className="tournament-card bg-white dark:bg-[#0a0a0a] rounded-lg border border-black/[.06] p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-1">Date: {date}</p>
      <p className="text-sm text-muted-foreground mb-4">Location: {location}</p>

      <div className="flex gap-3">
        <Link
          href={registerHref}
          className="inline-flex items-center justify-center rounded-full px-4 py-2 bg-foreground text-background font-medium shadow-sm hover:opacity-95"
        >
          Register
        </Link>

        <Link
          href={infoHref}
          className="inline-flex items-center justify-center rounded-full px-4 py-2 border border-black/[.08] dark:border-white/[.12] hover:bg-gray-50 dark:hover:bg-[#111] font-medium"
        >
          More Information
        </Link>
      </div>
    </article>
  );
}
