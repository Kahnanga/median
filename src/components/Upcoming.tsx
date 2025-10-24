import TournamentCard from "./TournamentCard"
import { supabase } from "@/lib/supabaseclient"

type Tournament = {
  title: string
  location: string
  start_date: string
  slug?: string
}

export default async function Upcoming() {
  const { data: tournaments, error } = await supabase
    .from("chess_events_deduped")
    .select("title, location, start_date, slug")
    .ilike("title", "%open%")
    .order("start_date", { ascending: true })
    .limit(4)

  if (error) {
    console.error("Supabase error:", error.message)
    return (
      <div className="text-red-500 text-center py-10">
        Fehler beim Laden der Turniere.
      </div>
    )
  }

  return (
    <section className="upcoming-section w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Upcoming FIDE-Rated Open Tournaments (Selection)
        </h2>

        {(!tournaments || tournaments.length === 0) ? (
          <p className="text-center text-muted-foreground">
            Keine passenden Turniere gefunden.
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {tournaments.map((t: Tournament) => (
              <TournamentCard
                key={t.slug || t.title}
                title={t.title}
                date={new Date(t.start_date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
                location={t.location}
                infoHref={`/events/${t.slug || ""}`}
                registerHref="#"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
