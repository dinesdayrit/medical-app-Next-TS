import { Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorCard() {
  return (
    <Link href="#" className="border border-gray-200 bg-white inline-flex flex-col justify-start py-8 px-3 rounded-md">
      <h1 className="font-bold uppercase">Dayrit, Lucas</h1>
      <p className="py-3">123 street. Davao City 8000</p>
      <div className="flex items-center gap-4 py-4 border-b">
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
  )
}
