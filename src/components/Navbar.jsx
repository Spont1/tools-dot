import { Link, useLocation } from "react-router"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {

    const location = useLocation();
    const handleClick = () => {
        
    }

    return(
        <nav className="flex flex-col w-3xs ml-10 mt-30 text-2xl font-semibold ">


            <Link to="/nav">
            <GiHamburgerMenu 
            className="absolute top-35 left-14 scale-200 md:hidden"/>
            </Link>

            <div className="hidden md:flex flex flex-col">
                <input type='text'max-length='20' placeholder="Search"
                className='pl-5 py-2 bg-bg rounded-full mb-10 shadow-md focus:outline-0' />
                
                <Link
                to="/qr"
                className={location.pathname === "/qr" ? "bg-black text-white" : "bg-bg-two"}>
                    <div className="flex p-2 my-2 
                    hover:bg-black hover:text-white
                    transition duration-300 ease-in-out">
                        <button className="justify-center">QR code generator</button>
                    </div>
                </Link>

                <Link
                to="/passwordGenerator"
                className={location.pathname === "/passwordGenerator" ? "bg-black text-white" : "bg-bg-two"}>
                    <div className="flex p-2 my-2 
                    hover:bg-black hover:text-white
                    transition duration-300 ease-in-out">
                        <button>Password generator</button>
                    </div>
                </Link>

                <Link
                to="/colorPicker"
                className={location.pathname === "/colorPicker" ? "bg-black text-white" : "bg-bg-two"}>
                <div className="flex p-2 my-2 
                hover:bg-black hover:text-white
                transition duration-300 ease-in-out">
                    <button>Color picker</button>
                </div>
                </Link>
            </div>

        </nav>
    )
}