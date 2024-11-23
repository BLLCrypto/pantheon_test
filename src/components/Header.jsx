import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"
import { BorderTop, BorderBottom, Menu } from '../assets/svg'
import PrimaryButton from "./buttons/PrimaryButton"
import SwitchPage from "./SwitchPage"
import TextButton from "./TextButton"
import SecondaryButton from "./buttons/SecondaryButton"

const Header = () => {
    return (<header className='w-full flex justify-center py-[30px] px-5 lg:py-[40px] lg:px-10 text-xs md:text-sm tracking-[2px]'>
        <div className="w-full h-full max-w-7xl flex items-center justify-between">
            <div className='w-1/2 md:w-1/3'>
                <Link to="/">
                    <img className="max-w-[168.109px] cursor-pointer" src={Logo} />
                </Link>
            </div>
            <div className='hidden md:flex md:w-1/3 justify-center'>
                <SwitchPage />
            </div>
            <div className='w-1/2 md:w-1/3 flex items-center justify-end'>
                <div className="hidden md:w-full md:flex items-center justify-end">
                    <TextButton text="SIGN UP" />
                    <SecondaryButton text="LOGIN" />
                </div>
                <div className="w-full md:hidden flex items-center justify-end">
                    <div className="cursor-pointer">
                        <SecondaryButton text={<Menu />} className={"px-2.5"} />
                    </div>
                </div>
            </div>
        </div>
    </header>)
}

export default Header