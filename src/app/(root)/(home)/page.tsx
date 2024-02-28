import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/src/components/HeroSection";
import BlogSection from "@/src/components/BlogSection";

export default function Home() {
  return (
    <main className="mt-36 prose wrapper">
      <HeroSection />
      <BlogSection />
    </main>
  );
}
