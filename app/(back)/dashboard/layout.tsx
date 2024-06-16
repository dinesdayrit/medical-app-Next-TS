import NavBar from "@/components/Dashboard/NavBar";
import { ReactNode } from "react";


export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className="bg-white">
      <NavBar />
      {children}
    </div>
  )
}
