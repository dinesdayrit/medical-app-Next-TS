import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton'
import Link from 'next/link'
import DoctorCard from './DoctorCard'
import { Map, MapIcon } from 'lucide-react'
import DoctorsListCarousel from './DoctorsListCarousel'

export default function DoctorsList({ 
    title="Telehealth visit", 
    isInPerson, 
    className="bg-pink-100  m-w-6xl py-8 lg:py-24"
}:{
    title?:string;
    isInPerson?:boolean;
    className?:string;
}) {
    
    const doctors =[
        {
            name:"John"
        },
        {
            name:"John"
        },
        {
            name:"John"
        },
        {
            name:"John"
        },
        {
            name:"John"
        },
    ]
  return (
    <div className={className}>
        <div className="max-w-6xl mx-auto">
        <SectionHeading title={title}/>
        <div className="py-4 flex items-center justify-between"> 
        {isInPerson ? (
            <Link href="#" className="text-blue-600 flex font-semibold gap-2 text-sm">
                <MapIcon className="w-5 h-5 flex-shrink-0"/>
                <span>Map View</span>
            </Link>
            
        ):(
            <ToggleButton/>
        )}
        <Link href="#" className="py-3 px-4 border border-blue-600 bg-white">See All</Link>
        </div>
        <div className="items-center justify-center gap-4">
        <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson}/>
        </div>
        </div>
    </div>
  )
}
