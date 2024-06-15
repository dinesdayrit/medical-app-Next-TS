import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorCard({ isInPerson=false }:{isInPerson?: boolean}) {
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
    <div className="border border-gray-200 bg-white inline-flex flex-col justify-start py-8 px-3 rounded-md hover:border-gray-800 duration-500 transition-all">
      <Link href="#">
        <h2 className="font-bold uppercase">Dayrit, Lucas</h2>
        {isInPerson &&
            <p className="py-3">123 street. Davao City 8000</p>
        }
        <div className="flex items-center gap-4 py-4">
            <div className="relative">
            <Image src="/doctor.jpg" width={540} height={360} alt="/" className="w-24 h-24 rounded-full object-cover"/>
            {!isInPerson &&
                <p className="bg-blue-200 text-blue-700 w-10 h-10 flex items-center justify-center rounded-full absolute bottom-0 right-0">
                    <Video className="w-6 h-6"/>
                </p>
            }
        </div>
            <div className="flex flex-col">
            <p className="flex items-center">
            <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0"/>
            <span>family Medicine</span>
            </p>
            <p className="bg-green-200 py-3 px-4 text-center uppercase">
            Available today
            </p>
            </div>
      </div>
      </Link>
      <div className="pt-6 border-t border-gray-300">
        <h3 className="flex gap-4 justify-between items-center">
            <span className="text-sm text-gray-600">Tue, Mar 12</span> <span className="font-bold">Php 500</span>
        </h3>
        <div className="py-3 grid grid-cols-3 gap-3">
            {
                timeStamp.slice(0,5).map((item, i)=>{
                    return <Link key={i} href="#" className="bg-blue-600 text-center text-white p-2">
                        {item.time}{item.period}
                    </Link>
                })
            }
            <Link href="#" className="bg-blue-900 text-center text-white p-2">
            See more..</Link>
        </div>
      </div>
    </div>
  )
}
