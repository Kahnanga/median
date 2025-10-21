import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Signup from "../components/Signup";
import Upcoming from "../components/Upcoming";
import HostSection from "../components/Host";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Signup />
        <Upcoming />
        <HostSection />
      </main>
    </>
  );
}
