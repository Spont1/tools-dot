import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function Footer() {
    return(
    <div className="scale-300 absolute left-1/2 bottom-10">
        <div className="flex">
            <div className="flex hover:scale-105 transition duration-200">
                <a href="https://github.com/Spont1" target="_blank">
                <FaGithub />
                </a>
            </div>
            <div className="flex hover:scale-105 transition duration-200 px-1">
                <a href="https://dawidhalajda.dev/" target="_blank">
                <FaGlobe />
                </a>
            </div>
        </div>

    </div>
)
}