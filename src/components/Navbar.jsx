import { Link, useLocation } from "react-router"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {


    const tools = [{toolName: "Qr code generator", toolLink:"/qr"}, {toolName: "Password Generator", toolLink:"/passwordGenerator"}]

    const toolsList = []

    tools.forEach((tools, index) => {
        toolsList.push(<Link to={`${tools.toolLink}`}>
            <li key={index}className="flex p-2 my-2 
                    hover:bg-black hover:text-white
                    transition duration-300 ease-in-out">{tools.toolName}
            </li></Link>)

    })

    return(
        <nav className="flex flex-col w-3xs ml-10 mt-30 text-2xl font-semibold ">


            <Link to="/nav">
            <GiHamburgerMenu 
            className="absolute top-35 left-14 scale-200 md:hidden"/>
            </Link>

            <div className="hidden md:flex flex flex-col">
                <input type='text'max-length='20' placeholder="Search"
                className='pl-5 py-2 bg-bg rounded-full mb-10 shadow-md focus:outline-0' />
                <ul>
                    {toolsList}
                </ul>
            </div>

        </nav>
    )
}