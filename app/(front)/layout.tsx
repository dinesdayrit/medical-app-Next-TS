import MegaMenu from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";
import { ReactNode } from "react";


export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className="bg-white">
      <Navbar />
      {/* <div className="bg-white mx-auto py-6 fixed top-20 w-full left-0 right-0 z-50 border-t border-gray-400/30">
      <MegaMenu />
      </div> */}
      <div className="mt-[65px]">
      {children}
      </div>
      
    </div>
  )
}
