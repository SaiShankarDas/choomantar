import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Volunteer from "@/components/Volunteer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Location />
      <Volunteer />
      <Faq />
      <Footer />
    </main>
  );
}
