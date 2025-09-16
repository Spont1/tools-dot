import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return(
    <div className="absolute left-1/2 bottom-10 flex scale-300 hover:scale-320 transition duration-200">
        <a href="https://github.com/Spont1" target="_blank">
        <FaGithub />
        </a>
    </div>
)
}