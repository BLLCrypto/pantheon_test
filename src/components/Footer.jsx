import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"
import { BorderTop, BorderBottom, Menu, Linkedin, Twitter } from '../assets/svg'
import SwitchPage from "./SwitchPage"
import TextButton from "./buttons/TextButton"
import SecondaryButton from "./buttons/SecondaryButton"

const Footer = () => {
    return (
    <footer className='w-full absolute flex justify-center py-[30px] px-5 lg:py-[40px] lg:px-10 md:text-sm tracking-[2px] z-10'>
        <div className="w-full h-full max-w-7xl flex items-center justify-between text-xs">
            <div className='text-gray opacity-60'>
                <p>© ARES 2024. All Rights Reserved.</p>
            </div>
            <div className='flex items-center'>
              <p className="text-gray opacity-60">Contact us: <b>support@pantheon.international</b></p>
            </div>
            <div className='flex items-center gap-[24px]'>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <div className="flex items-center gap-[12px] ">
                <Linkedin className="w-[24px] h-[24px] hover:pointer" />
                <Twitter className="w-[24px] h-[24px] hover:pointer" />
              </div>
            </div>
        </div>
    </footer>)
}

export default Footer