"use client";

import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitted");
  }

  return (
    <section className="signup-section w-full">
      <div className="signup-container max-w-5xl mx-auto px-4 py-12">
        <div className="signup-card bg-transparent rounded-lg">
          <div className="signup-content grid gap-6 max-w-3xl">
            <h2 className="signup-title text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to compete with confidence?
            </h2>

            <p className="signup-description text-base max-w-prose">
              Create your Challenger account to discover, track, and register for regional tournaments — all
              from a single, secure dashboard. Register now — it only takes a minute. Save favorite events,
              receive timely alerts, and complete fast, protected entries.
            </p>

            <form className="signup-form flex flex-col sm:flex-row gap-3 items-start sm:items-center" onSubmit={handleSubmit}>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>

              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="signup-input w-full sm:max-w-md px-4 py-3 rounded-md border border-black/[.08] focus:outline-none"
                aria-label="Email address"
              />

              <button
                type="submit"
                className="signup-button inline-flex items-center justify-center rounded-full px-5 py-3 bg-foreground text-background font-medium shadow-sm hover:opacity-95"
              >
                Create Account
              </button>
            </form>

            {status === "submitted" && (
              <div className="signup-success text-sm text-muted-foreground">Thanks — check your email to confirm.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
