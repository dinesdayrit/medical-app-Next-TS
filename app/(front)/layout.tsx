import MegaMenu from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";
import { ReactNode } from "react";


export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto py-3">
      <MegaMenu />
      </div>
      {children}
    </div>
  )
}
