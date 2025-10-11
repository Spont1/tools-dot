import { useState } from "react"
import Topper from "./Topper"
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../App.css'

export default function Qr() {
  const [inputValue, setInputValue] = useState()
  const [value, setValue] = useState("Example")

  const handleClick = () => {
    setValue(inputValue)
  }

  return(
    <div className="h-screen w-screen absolute sm:right-0 right-5">
      <Topper />
      <div className='grid grid-cols-4 h-9/10'>
          <Navbar />
        <div className='
        col-span-3 h-3/4 w-4/5 flex bg-two sm:bg-bg
        mt-30 mr-auto justify-center content-center
        sm:shadow-xl'>
          
          <div className='flex flex-col gap-6 justify-center items-center sm:scale-100 scale-75'>
            <p className='font-semibold text-4xl text-center mb-20'>Paste the text or link you want to generate as a QR code</p>
            <div>

              <input
              className='
              pl-5 py-2 bg-bgrounded-full bg-white
              mb-10 shadow-xl focus:outline-0
              w-120 border-2 rounded-full'
              type="text"
              placeholder="Enter your text or link here"
              onChange={(event) => setInputValue(event.target.value)}/>

              <button 
              onClick={handleClick}
              className="
              mx-6 p-2 border-2 border-black
              bg-black rounded-full text-white
              font-semibold sm:scale-100 scale-150"
              >Generate</button>

            </div>
            <img alt="qr code" src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}`} className=""></img>
              <a href={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}`} download> 
                <button className="
                mt-10 p-2 border-2 border-black
                bg-black rounded-full text-white
                font-semibold sm:scale-120 scale-150"
                >Download PNG</button>
              </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
)}