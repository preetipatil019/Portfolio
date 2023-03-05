import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll";


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick =() => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div className="text-3xl font-medium text-[#fff] font-['Pacifico'] ease-in-out">
                <a href="#">PortFolio</a>
                <span className="text-pink-600"> PB</span>
                  
            </div>
           
            <ul className="hidden md:flex">
                <li>
                    <Link  to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link  to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li>
                    <Link  to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li>
                    <Link  to="work" smooth={true} duration={500}>
                    Work
                    </Link>
                </li>
                <li> <Link  to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
                </li>
                </ul>
       
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
               {!nav ? <FaBars /> : <FaTimes />} 
            </div>
            {/* mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link></li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/preeti-patil-bb433885/">Linkedin<FaLinkedin size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/preetipatil019">Github<FaGithub size={30} /></a>
                    </li>
                     <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ">
                        <a className="flex justify-between items-center w-full text-gray-300" href="mailto:preetipatil019@gmail.com">Email<HiOutlineMail size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] ">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://drive.google.com/file/d/1TL_iAS8ZDdfqD4BQVNx8EFJ8SGXOk-RF/view?usp=sharing">Resume<BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Navbar;