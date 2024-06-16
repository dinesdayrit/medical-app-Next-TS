"use client"

import { useState } from "react"
import { Availability } from "./Availability";

export default function DoctorDetails() {
  const [ isActive, setIsActive ] = useState('services');

  
  return (
    <div>
      <div className="flex flex-row items center justify-between ">
        <button onClick={() => setIsActive('services')} 
        className={`w-full p-2 uppercase font-bold ${isActive === 'services' ? "bg-blue-600 text-white" : "bg-slate-100"}`}
        >
          Service Details
        </button>
        <button onClick={() => setIsActive('availability')} 
        className={`w-full p-2  uppercase tracking-widest font-bold ${isActive === 'availability' ? "bg-blue-600 text-white" : "bg-slate-100"}`}
        >
          Availability
        </button>
      </div>
      <div className="py-8 px-6">
        {isActive === "services" ? (
          <div>
            Service Details Component
          </div>
        ):(
          <Availability />
        )}


      </div>

    </div>
  )
}
