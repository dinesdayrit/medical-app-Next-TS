import SignupForm from "@/components/auth/SignupForm";




export default function page() {
  return (
    <div className="bg-blue-100 min-h-screen py-8 px-6 ">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div className="hidden lg:block linear-bg">
            {/* <Image src="/loginimage.jpg" alt="" height={1000} width={675} /> */}
            </div>
            
            <div className="">
                <SignupForm />
            </div>
        </div>
    </div>
  )
}
