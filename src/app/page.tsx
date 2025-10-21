import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Signup from "../components/Signup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Signup />
      </main>
    </>
  );
}
