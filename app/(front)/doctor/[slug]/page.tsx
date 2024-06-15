import DoctorDetails from '@/components/DoctorDetails'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="bg-slate-50 p-24 min-h-screen">
      <div className="bg-white max-w-4xl border border-bg-gray-200 mx-auto shadow-md rounded-md">
       <div className="py-12 px-8">
        <div className="flex justify-between items-center">
        <div>
        <div className="flex flex-col">
            <h2 className="font-bold text-xl uppercase">Dayrit, Lucas</h2>
            <p className="text-xs text-gray-500">Family Medicine</p>
        </div>

        <div className="py-3">
        <p className="font-bold">In-person doctor visit</p>
        <p className="text-sm">123. street, Davao City 8000</p>
        </div>
        </div>
        <Image src="/doctor.jpg" width={540} height={360} alt="/" className="w-36 h-36 rounded-full object-cover"/>
        </div>
        </div>
        <DoctorDetails />
       </div>
    </div>
  )
}
