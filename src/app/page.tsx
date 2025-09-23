"use client";
import Navbar from "@/app/Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import placeholder from "./placeholder.png";
import FAQ from "./Components/FAQ/FAQ";
import Feed from "./Components/Feed/Feed";
import placeholder1 from "./placeholder1.jpg";
import placeholder2 from "./placeholder2.jpg";
import placeholder3 from "./placeholder3.jpg";

const urls = [placeholder1, placeholder2, placeholder3];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero src={placeholder} alt="placeholder" />
      <FAQ />
      <Feed urls={urls} />
    </>
  );
}
