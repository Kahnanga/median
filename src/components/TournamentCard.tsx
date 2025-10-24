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
    <article style={{backgroundColor: "rgb(10, 10, 10)", borderRadius: "8px", padding: "24px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px", fontWeight: 400, minHeight: "260px", display: "flex", flexDirection: "column", border: "0.8px solid rgba(255, 255, 255, 1)"}}>
      <div style={{marginBottom: "8px"}}>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div style={{flex: "0 0 auto"}}>
        <p className="text-sm text-muted-foreground mb-1">Date: {date}</p>
        <p className="text-sm text-muted-foreground mb-4">Location: {location}</p>
      </div>

      <div style={{display: "flex", gap: "12px", marginTop: "auto", flexDirection: "row"}}>
        <Link
          href={registerHref}
          className="inline-flex items-center justify-center rounded-full font-medium"
          style={{padding: "8px 16px", backgroundColor: "rgb(237, 237, 237)", color: "rgb(10,10,10)", borderRadius: "9999px"}}
        >
          Register
        </Link>

        <Link
          href={infoHref}
          className="inline-flex items-center justify-center rounded-full font-medium"
          style={{padding: "8px 16px", border: "0.8px solid rgba(255,255,255,0.12)", borderRadius: "9999px"}}
        >
          More Information
        </Link>
      </div>
    </article>
  );
}
