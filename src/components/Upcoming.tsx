import TournamentCard from "./TournamentCard";

export default function Upcoming() {
  const tournaments = [
    {
      title: "Spring Open - City Invitational",
      date: "May 12-14, 2025",
      location: "Stockholm, Sweden",
      registerHref: "/register/spring-open",
      infoHref: "/events/spring-open",
    },
    {
      title: "Nordic Rapid Championship",
      date: "June 2-4, 2025",
      location: "Oslo, Norway",
      registerHref: "/register/nordic-rapid",
      infoHref: "/events/nordic-rapid",
    },
    {
      title: "City Weekend Open",
      date: "July 18-20, 2025",
      location: "Helsinki, Finland",
      registerHref: "/register/city-weekend",
      infoHref: "/events/city-weekend",
    },
    {
      title: "Autumn FIDE Open",
      date: "September 6-8, 2025",
      location: "Copenhagen, Denmark",
      registerHref: "/register/autumn-open",
      infoHref: "/events/autumn-open",
    },
  ];

  return (
    <section className="upcoming-section w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6"><div style={{fontWeight: 700, textAlign: 'center'}}>Upcoming FIDE-Rated Open Tournaments (Selection)</div></h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {tournaments.map((t) => (
            <TournamentCard
              key={t.title}
              title={t.title}
              date={t.date}
              location={t.location}
              registerHref={t.registerHref}
              infoHref={t.infoHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
