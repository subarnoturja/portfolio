import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/New-Logo-removebg.png"

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-3'>
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label='Home'>
                    <img src={logo} width={170} height={60} alt="logo" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-between gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/subarno-ranjan-barua/"
                    target="blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                        <FaLinkedin />
                </a>
                <a href="https://github.com/subarnoturja"
                    target="blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                        <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;