import HeroBanner from "@/components/heroBanner/HeroBanner";
import Section1 from "@/components/section1/Section1";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/Section3";
export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
