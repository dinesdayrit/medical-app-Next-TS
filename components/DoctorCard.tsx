import { Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorCard() {
    const timeStamp =[
        {
            time: "8:30",
            period: "am"
        },
        {
            time: "9:00",
            period: "am"
        },
        {
            time: "9:30",
            period: "am"
        },
        {
            time: "10:00",
            period: "am"
        },
        {
            time: "10:30",
            period: "am"
        },
        {
            time: "1:00",
            period: "pm"
        },
        {
            time: "1:30",
            period: "pm"
        },
        {
            time: "2:00",
            period: "pm"
        },
        {
            time: "2:30",
            period: "pm"
        },
    ]
  return (
    <div className="border border-gray-200 bg-white inline-flex flex-col justify-start py-8 px-3 rounded-md">
      <Link href="#">
        <h2 className="font-bold uppercase">Dayrit, Lucas</h2>
        <p className="py-3">123 street. Davao City 8000</p>
        <div className="flex items-center gap-4 py-4">
            <Image src="/doctor.jpg" width={540} height={360} alt="/" className="w-24 h-24 rounded-full object-cover"/>
            <div className="flex flex-col">
            <p className="flex items-center">
            <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0"/>
            <span>ENT, family Medicine</span>
            </p>
            <p className="bg-green-200 py-3 px-4 text-center uppercase">
            Available today
            </p>
            </div>
      </div>
      </Link>
      <div className="pt-6 border-t border-gray-300">
        <h3 className="flex gap-4 justify-between items-center">
            <span>Tue, Mar 12</span> <span>Php 500</span>
        </h3>
        <div className="py-3 grid grid-cols-3 gap-3">
            {
                timeStamp.slice(0,5).map((item, i)=>{
                    return <Link key={i} href="#" className="bg-blue-600 text-center">
                        {item.time}{item.period}
                    </Link>
                })
            }
            <Link href="#" className="bg-blue-600 text-center">
            See more..</Link>
        </div>
      </div>
    </div>
  )
}
