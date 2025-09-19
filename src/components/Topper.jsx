import { Link } from "react-router"


export default function Topper()  {
    return(
        <div className="w-full mb-20 flex flex-wrap justify-center">
            <Link to='/#'>
            <h1 className='absolute left-6 antialiased
            font-bold text-7xl ml-10 mt-12'>tools.</h1>
            </Link>
        </div>
    )}