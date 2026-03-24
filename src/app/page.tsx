"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  useEffect(() => {
    // Force scroll to top and remove lingering hashes on load
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="min-h-[100dvh] bg-brand-bg w-full overflow-x-clip selection:bg-brand-red selection:text-brand-white">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Footer />
    </main>
  );
}
