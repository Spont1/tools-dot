import Topper from "./Topper";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BlockPicker, HuePicker } from "react-color";
import { useState } from "react";


export default function ColorPicker() {
    const [colorState, setColorState] = useState("#000000")

    const cssSnipet  = `
 @import "tailwindcss";
 @theme {
 --color-customColorName: ${colorState};
 }
    `

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
            <p className="font-semibold text-4xl text-center mb-20">Pick a color or enter a hex value</p>
            <BlockPicker 
            className="scale-130 mb-20"
            color={ colorState }
            onChangeComplete={ (colorState) => {setColorState(colorState.hex)}}/>
            <HuePicker
            color={ colorState }
            onChange={ (colorState) => {setColorState(colorState.hex)}}/>
              <div>
                  <p className="font-semibold text-3xl text-center mb-20">css code:</p>
                  <pre className="bg-black text-white whitespace-pre"><code>
                      <p className="border-b border-white">.css</p>
                      {cssSnipet}
                  </code></pre>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}
