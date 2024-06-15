import DoctorsList from "@/components/DoctorsList";
import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import TabbedSection from "@/components/Frontend/TabbedSection";

export default function Home() {
  return (
    <section>
      <Hero />
      <Brands />
      <TabbedSection />
      <DoctorsList />
    </section>
  );
}
