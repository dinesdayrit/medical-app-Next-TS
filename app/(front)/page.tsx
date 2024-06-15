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
      <DoctorsList/>
      <DoctorsList className="bg-white  m-w-6xl py-8 lg:py-24" title="In-person doctor visit" isInPerson={true}/>
    </section>
  );
}
