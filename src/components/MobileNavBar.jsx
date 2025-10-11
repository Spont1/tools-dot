import { Link } from "react-router"


export default function MobileNavBar() {

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

        <nav className="w-full h-full flex items-center justify-center">
            <nav className="scale-110 flex w-3xs pt-10 text-2xl font-semibold items-center justify-center">
                <div className="flex flex-col">
                <input type='text'max-length='20' placeholder="Search"
                className='pl-5 py-2 bg-bg rounded-full mb-10 shadow-md focus:outline-0' />
            
                <ul>
                    {toolsList}
                </ul>
                
            </div>
            </nav>
        </nav>
    )
}