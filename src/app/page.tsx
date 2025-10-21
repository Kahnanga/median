import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Signup from "../components/Signup";
import Upcoming from "../components/Upcoming";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Signup />
        <Upcoming />
      </main>
    </>
  );
}
