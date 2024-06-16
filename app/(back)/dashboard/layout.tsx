import NavBar from "@/components/Dashboard/NavBar";
import Sidebar from "@/components/Dashboard/Sidebar";
import { ReactNode } from "react";


export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="flex">
      <Sidebar />
      {children}
      </div>
    </div>
  )
}
