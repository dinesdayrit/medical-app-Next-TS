"use client"
import { Tabs } from "flowbite-react";
import { Stethoscope, Syringe, Microscope, Activity } from "lucide-react";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";


export default function TabItems() {
  const services =[
    {
      title: "Telehealth",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "Video Prescription",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "UTI consult",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "Mental health",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "ED consult",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "Urgent care",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
  ]

  const tabs = [
    {
      title: "Popular Services",
      icon: Microscope,
      component: <ServiceList services={services}/>,
      content:[

      ]
    },
    {
      title: "Doctors",
      icon: Stethoscope,
      component: <LinkCards />,
      content:[]
    },
    {
      title: "Specialist",
      icon: Activity,
      component: <LinkCards />,
      content:[]
    },
    {
      title: "Symptoms",
      icon: Syringe,
      component: <LinkCards />,
      content:[]
    }
  ];
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      {
        tabs.map((tab, i) => {
          return (
            <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
              {tab.component}
          </Tabs.Item>

          )
        })
      }
    </Tabs>
  );
}
