"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
}
