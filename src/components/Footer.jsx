import { Link } from "react-router-dom"
import { Linkedin, Twitter } from '../assets/svg'
import { HeaderPadding } from "../config/style"
import { MainMaxW } from "../config/style"

const Footer = () => {
    return (
    <footer className={`${HeaderPadding} w-full absolute flex justify-center md:text-sm tracking-[2px] z-10`}>
        <div className={` ${MainMaxW} w-full h-full flex flex-col xl:flex-row gap-[4px] items-center justify-between text-xs leading-[160%] text-center`}>
            <div className='text-gray opacity-60 '>
                <p>© ARES {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
            <div className='flex items-center'>
                <p className="text-gray opacity-60">Contact us: <Link><b>support@pantheon.international</b></Link></p>
            </div>
            <div className='flex flex-col xl:flex-row items-center gap-[4px] xl:gap-[8px] 2xl:gap-[24px]'>
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