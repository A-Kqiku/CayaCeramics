"use client";
import Navbar from "@/app/Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FAQ from "./Components/FAQ/FAQ";
import Feed from "./Components/Feed/Feed";
import roteTasse from "./images/roteTasse.png";
import blauerTeller from "./images/blauerTeller.png";
import weisseTasse from "./images/cermaic_hero.png";

const urls = [roteTasse, blauerTeller, weisseTasse];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero src={weisseTasse} alt="placeholder" />
      <FAQ />
      <Feed urls={urls} />
    </>
  );
}
