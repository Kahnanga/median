'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseclient'
import TournamentCard from './TournamentCard'

type Tournament = {
  unique_id: string
  title: string
  location: string
  start_date: string
  slug?: string
}

export default function Upcoming() {
  const [tournaments, setTournaments] = useState<Tournament[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const pageSize = 4

  useEffect(() => {
    loadMoreTournaments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function loadMoreTournaments() {
    if (loading) return
    setLoading(true)

    const from = page * pageSize
    const to = from + pageSize - 1

    const { data, error } = await supabase
      .from('chess_events_deduped')
      .select('unique_id, title, location, start_date, slug')
      .ilike('title', '%open%')
      .gte('start_date', new Date().toISOString()) // nur kommende
      // ✅ stabile Sortierung: erst Datum, dann unique_id
      .order('start_date', { ascending: true })
      .order('unique_id', { ascending: true })
      .range(from, to)

    if (error) {
      console.error('Supabase error:', error.message)
      setLoading(false)
      return
    }

    if (!data || data.length === 0) {
      setHasMore(false)
      setLoading(false)
      return
    }

    // ✅ Sicherheitsnetz: Deduplizieren beim Anhängen
    setTournaments(prev => {
      const seen = new Set(prev.map(x => x.unique_id))
      const merged = [...prev]
      for (const row of data) {
        if (!seen.has(row.unique_id)) {
          merged.push(row)
          seen.add(row.unique_id)
        }
      }
      return merged
    })

    setPage(p => p + 1)
    setHasMore(data.length === pageSize)
    setLoading(false)
  }

  return (
    <section className="upcoming-section w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Upcoming FIDE-Rated Open Tournaments (Selection)
        </h2>

        {tournaments.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Keine passenden Turniere gefunden.
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {tournaments.map(t => (
              <TournamentCard
                key={t.unique_id} // eindeutig & stabil
                title={t.title}
                date={new Date(t.start_date).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
                location={t.location}
                infoHref={`/events/${t.slug || ''}`}
                registerHref="#"
              />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreTournaments}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all disabled:opacity-60"
            >
              {loading ? 'Loading...' : 'Load more ↓'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
