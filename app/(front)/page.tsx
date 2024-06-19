import DoctorsList from "@/components/DoctorsList";
import Brands from "@/components/Frontend/Brands";
import Footer from "@/components/Frontend/Footer";
import Hero from "@/components/Frontend/Hero";
import TabbedSection from "@/components/Frontend/TabbedSection";

export default function Home() {
  return (
    <section>
      <Hero />
      <Brands />
      <TabbedSection />
      <DoctorsList/>
      <DoctorsList className="bg-blue-100  m-w-6xl py-8 lg:py-24" title="In-person doctor visit" isInPerson={true}/>
      <Footer />
    </section>
  );
}
