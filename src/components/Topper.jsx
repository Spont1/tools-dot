import { Link } from "react-router"


export default function Topper()  {
    return(
        <div className="w-full mb-20 flex flex-wrap justify-center sm:mb-10">
            <Link to='/#'>
            <h1 className='absolute left-6 antialiased
            font-bold text-5xl ml-5 mt-7
            sm:ml-10 sm:mt-12 sm:text-7xl'>tools.</h1>
            </Link>
        </div>
    )}