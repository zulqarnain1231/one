import Image from "next/image";
import { Noto_Sans_KR } from "next/font/google";
import Navbar from "@/components/Shared/Navigation/Navbar";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "100",
});

export default function Home() {
  return (
    <main className={`w-full h-full ${noto.className}`}>
      <Navbar />
    </main>
  );
}
