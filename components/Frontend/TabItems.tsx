"use client"
import { Tabs } from "flowbite-react";
import {  X } from "lucide-react";
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
      icon: X,
      component: <ServiceList services={services}/>,
      content:[

      ]
    },
    {
      title: "Doctors",
      icon: X,
      component: <LinkCards />,
      content:[]
    },
    {
      title: "Specialist",
      icon: X,
      component: <LinkCards />,
      content:[]
    },
    {
      title: "Symptoms",
      icon: X,
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
