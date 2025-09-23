import Topper from "./Topper"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"
import { FaRegCopy } from "react-icons/fa";

export default function PasswordGenerator() {

    const [password, setPassword] = useState("password")

    return(
    <div className='h-screen w-screen'>
      <Topper />
      <div className='grid grid-cols-4 h-9/10'>
          <Navbar />
        <div className='
        col-span-3 h-3/4 w-4/5 flex bg-bg shadow-xl
        mt-30 mr-auto justify-center content-center
        '>
            <div className='flex flex-col gap-6 justify-center items-center'>
                <div className="
                flex bg-white shadow-xl rounded-full
                py-3 px-8 items-center scale-120">
                    <input type="text" value="password" className="w-60 font-semibold"/>
                    <FaRegCopy className="
                    scale-220 mx-5"/>
                    <button className="
                    p-2 border-2 border-black
                    bg-black rounded-full text-white
                    font-semibold scale-120"
                    >Generate</button>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col">
                        <p className="font-semibold text-2xl mb-20">length</p>
                        <input type="range" className="accent-black"/>
                    </div>
                    <div className="flex flex-col">
                        <p>checkboxes</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}