"use client";
import Navbar from "@/app/Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FAQ from "./Components/FAQ/FAQ";
import Feed from "./Components/Feed/Feed";

const urls = [
  "/images/roteTasse.png",
  "/images/blauerTeller.png",
  "/images/cermaic_hero.png",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero src={"/images/cermaic_hero.png"} alt="placeholder" />
      <FAQ />
      <Feed urls={urls} />
    </>
  );
}
