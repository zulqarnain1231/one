import Image from "next/image";
import { Noto_Sans_KR } from "next/font/google";
import Navbar from "@/components/Shared/Navigation/Navbar";
import Hero from "@/components/Home/Hero/Hero";
import Consultation from "@/components/Home/Consultation/Consultation";
import Services from "@/components/Home/Services/Services";
import Gallery from "@/components/Home/Gallery/Gallery";
import Partners from "@/components/Home/Partners";
import News from "@/components/Home/News/News";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "100",
});

export default function Home() {
  return (
    <main className={`w-full h-full ${noto.className}`}>
      <Navbar />
      <Hero />
      <Consultation />
      <Services />
      <Gallery />
      <Partners />
      <News />
    </main>
  );
}
