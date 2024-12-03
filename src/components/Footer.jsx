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
                <p>© ARES {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
            <div className='flex items-center'>
                <p className="text-gray opacity-60">Contact us: <Link><b>support@pantheon.international</b></Link></p>
            </div>
            <div className='flex items-center gap-[24px]'>
              <Link>
                <p className="text-gray opacity-60 hover:opacity-100">Privacy Policy</p>
              </Link>
              <Link>
                <p className="text-gray opacity-60 hover:opacity-100">Terms of Service</p>
              </Link>
              <div className="flex items-center gap-[12px] ">
                <Link>
                  <Linkedin className="text-gray opacity-60 w-[24px] h-[24px] hover:opacity-100" />
                </Link>
                <Link>
                  <Twitter className="text-gray opacity-60 w-[24px] h-[24px] hover:opacity-100" />
                </Link>
              </div>
            </div>
        </div>
    </footer>)
}

export default Footer