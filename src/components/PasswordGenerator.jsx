import Topper from "./Topper"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"
import { FaRegCopy } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";

export default function PasswordGenerator() {

    const [password, setPassword] = useState("password")
    const [passwordLength, setPasswordLength] = useState("6")
    const [numbersCheckbox, setNumbersCheckbox] = useState(false)
    const [specialcharCheckbox, setSpecialCharCheckbox] = useState(false)

    function getPassword(length) {

        //Array with characters on every index

        const letters = [
        ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        ]

        const lettersAndNumbers = [
        ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        ]

        const allChars = [
        ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
        ]

        const lettersAndSpecialChars = [
        ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*"
        ]



        let generatedValue = ""

        let activeChars = ""

        //checking which checkboxes are checked

        if(numbersCheckbox == true && specialcharCheckbox == true) {
            activeChars = allChars
        } else if(numbersCheckbox == true) {
            activeChars = lettersAndNumbers
        }
        else if(specialcharCheckbox == true) {
            activeChars = lettersAndSpecialChars
        }
        else {
            activeChars = letters
        }

        //generating password

            for(let i = 0; i < length; i++) {

                let randomIndex = Math.floor(Math.random() * activeChars.length)
                generatedValue += activeChars[randomIndex]
            }

        return(generatedValue)
    }
    
    const handleClick = () => {
        setPassword(getPassword(passwordLength, 1))
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
    }

    const minPasswordLenght = "4"
    const maxPasswordLength = "36"

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

                    <input type="text"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-60 font-semibold focus:outline-0"/>

                    <div className="relative group">
                        <FaRegCopy className="
                        scale-195 mx-5 opacity-50 hover:opacity-100
                        transition duration-300"
                        onClick={handleCopy}/>

                    </div>

                    <button className="
                    p-2 border-2 border-black
                    bg-black rounded-full text-white
                    font-semibold scale-120"
                    onClick={handleClick}
                    >Generate
                    </button>

                </div>

                <div className="grid grid-cols-2">
                    <div className="flex flex-col">
                        <div className="relative flex flex-col justify-start">
                            <p className="
                            font-semibold text-2xl mb-12 t  text-center">
                                length</p>
                            <span className="
                            absolute bottom-6 text-xl font-semibold
                            text-white bg-black p-1.5"
                            style={{ left: `calc(${(passwordLength / maxPasswordLength) * 100}% - 30px)` }}>
                                {passwordLength}
                            </span>

                            <input
                            type="range"
                            min={minPasswordLenght}
                            max={maxPasswordLength}
                            value={passwordLength}
                            onChange={(event) => setPasswordLength(event.target.value)}
                            className=" accent-black m-0 p-0"/>
                        </div>
                    </div>

                    <div className="flex flex-col ml-3 pr-3 pt-5 relative">
                        <div>

                            <input 
                            type="checkbox"
                            checked={numbersCheckbox}
                            onChange={(event) => setNumbersCheckbox(event.target.checked)}
                            id="numbers"
                            className="scale-160 accent-black"/>

                            <label
                            for="numbers"
                            className="p-2 font-semibold text-lg"
                            >Contain numbers</label>

                        </div>
                        <div>

                            <input 
                            type="checkbox"
                            checked={specialcharCheckbox}
                            onChange={(event) => setSpecialCharCheckbox(event.target.checked)}
                            id="specialCharacters"
                            className="scale-160 accent-black mt-7"/>

                            <label
                            for="specialCharacters"
                            className="p-2 font-semibold text-lg"
                            >Contain special characters</label>
                            <div className="relative group">
                                <FaCircleQuestion 
                                className="scale-120 absolute bottom-1 left-60"/>
                        <div className="
                        absolute bottom-8 left-54 transform duration-200 opacity-0 group-hover:opacity-100
                        ">
                            <p className="
                            text-white bg-black p-1.5 flex flex-inline
                            whitespace-nowrap">eg. $!%</p>
                            <div className="absolute left-6
                            w-0 h-0 
                            border-l-9 border-l-transparent
                            border-r-9 border-r-transparent
                            border-t-9 border-t-black"></div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}