import CustomAccordion from "@/components/Frontend/Services/CustomAccordion";
import PricingPlans from "@/components/Frontend/Services/PricingPlans";
import { Button } from "@/components/ui/button";
import { Description } from "@headlessui/react";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const features =[
    "Medic brings patients to you",
    "Seamless e-prescribing experience",
    "Integrated clinical note-taking",
  ]

  const whyUs =[
    {
      title: "Begin Your Journey",
      decription: "Start a new application to join our network of healthcare providers.",
      linkTitle: "Start new Application"
    },
    {
      title: "Resume Application",
      decription: "Pick up where you left off and complete your onboarding process.Schedule for Physical Approval.",
      linkTitle: "Continue your Appplication"
    },
    {
      title: "Schedule a Call",
      decription: "Arrange a time for a call to finalize your application.",
      linkTitle: "Schedule a Call"
    },
    {
      title: "Truck your Progress",
      decription: "Monitor the status of your application and approvals in real-time.",
      linkTitle: "Check Status"
    },
  ]
  return (
    <div className="min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
        <h2 className="font-semibold text-2xl md:text-5xl leading-loose">Build a thriving <span className="text-blue-600">direct-pay</span> practice with DiAL Doc.</h2>
        <p className="py-4 text-sm">Welcome to DiAL Doc, where connecting with patients is made easier than ever before. Our platform streamlines the process of managing appointments, providing care remotely, and keeping track of patient records</p>
        <Button className="bg-blue-600 hover:bg-blue-600/90">
        <Link href="#">List your Service</Link>
        </Button>
        <div className="py-6">
        {
          features.map((feature, i) =>{
            return(
              <p key={i} className="flex items-center">
                <Check className="text-blue-500 mr-2 w-4 h-4 flex-shrink-0"/>
                {feature}
              </p>
            )
          })
        }
        </div>
        </div>
        <div>
          <Image src="/doctor.jpg" height={540} width={360} alt="/" className="h-full w-full"/>
        </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Image src="/whyUs.jpg" height={6644} width={4429} alt="/" className="h-full w-full hidden md:block"/>
        </div>
        <div className="">
        <h2 className="text-xl md:text-2xl leading-loose">Join DiAL Doc to increase your <span className="text-blue-600">revenue</span> today.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4"> 
            {
              whyUs.map((item, i)=> {
                return (
                  <div key={i} className="bg-blue-900 p-6 rounded-lg shadow-2xl flex flex-col items-center gap-2">
                  <h3 className="font-bold text-center text-white text-lg">{item.title}</h3>
                  <p className="text-sm text-center text-slate-300">{item.decription}</p>
                  <Button className="align-center">{item.linkTitle}</Button>
                  </div>
                )
              })
            }
        </div>
        </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
            <PricingPlans />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center text-xl">FAQ</h1>
        <CustomAccordion />
        </div>
      </section>
      
    </div>
  )
}
