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
        <div className="signup-card rounded-lg" style={{ display: "flex", flexDirection: "column" }}>
          <div className="signup-content max-w-[1851px] mx-auto flex flex-col gap-6">
            <h2 className="signup-title text-3xl font-bold" style={{ margin: "0 auto" }}>
              Ready to compete with confidence?
            </h2>

            <div className="signup-description text-base max-w-prose" style={{ margin: "0 auto" }}>
              <p>
                Create your Challenger account to discover, track, and join local tournaments — all in one place. Save
                your favorites, get updates, and register in seconds.
              </p>
            </div>

            <form className="signup-form flex items-center gap-3" onSubmit={handleSubmit}>
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
