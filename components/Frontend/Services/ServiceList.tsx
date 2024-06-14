import ServiceCard from "./ServiceCard";
import { ServiceProps } from "@/types/type";

export default function ServiceList({services}: {services:ServiceProps[]} ) {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6">
        {
            services.map((service,i) => {
                return <ServiceCard key={1} service={service} />
            })
        }
    </div>
  )
}
