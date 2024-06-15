import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton'
import Link from 'next/link'
import DoctorCard from './DoctorCard'

export default function DoctorsList() {
  return (
    <div className="bg-pink-100  m-w-6xl py-8 lg:py-24">
        <div className="max-w-6xl mx-auto">
        <SectionHeading title="Telehealth"/>
        <div className="py-4 flex items-center justify-between"> 
        <ToggleButton />
        <Link href="#" className="py-3 px-4 border border-blue-600 bg-white">See All</Link>
        </div>
        <DoctorCard />
        </div>
    </div>
  )
}
