import { Link, useLocation } from "react-router"

export default function Navbar() {
    const location = useLocation();

    return(
        <div className="flex flex-col w-3xs ml-10 mt-30 text-2xl font-semibold ">
            
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

            <div className="flex p-2 my-2 
            hover:bg-black hover:text-white
            transition duration-300 ease-in-out">
                <button>JSON validator</button>
            </div>

            <div className="flex p-2 my-2 
            hover:bg-black hover:text-white
            transition duration-300 ease-in-out">
                <button>Unit converter</button>
            </div>

            <div className="flex p-2 my-2 
            hover:bg-black hover:text-white
            transition duration-300 ease-in-out">
                <button>Tailwind color picker</button>
            </div>
        </div>
    )
}