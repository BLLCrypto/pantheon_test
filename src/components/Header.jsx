import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"
import { BorderTop, BorderBottom, Menu, Close } from '../assets/svg'
import SwitchPage from "./SwitchPage"
import TextButton from "./buttons/TextButton"
import SecondaryButton from "./buttons/SecondaryButton"
import { useEffect, useRef, useState } from "react"
import { MainMaxW, HeaderPadding } from "../config/style"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null); // Ref for the button you want to exclude

    const toggleMenu = () => {
        
        setIsMenuOpen((prev) => !prev);
    };

   /* const handleClickOutside = (event) => {
        // Check if the click is outside the menu and not on the button
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)
        ) {
          //setIsMenuOpen(false);
        }
      };*/

    const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsMenuOpen(false);
        }
      };

    // Add event listeners for clicking outside and scrolling
    /*useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        //window.addEventListener('scroll', handleScroll);

        return () => {
        document.removeEventListener('click', handleClickOutside);
        //window.removeEventListener('scroll', handleScroll);
        };
    }, []);*/

    return (<header className={`${HeaderPadding} w-full absolute flex justify-center text-xs md:text-sm tracking-[2px] z-20`}>
        <div className={`${MainMaxW} w-full h-full flex items-center justify-between z-20`}>
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
                    <SecondaryButton text="LOGIN" className="text-gray" />
                </div>
                <div className="w-full md:hidden flex items-center justify-end">
                    <SecondaryButton buttonRef={buttonRef}  className={"!px-[12px] !w-max"} text={!isMenuOpen ? <Menu className="w-[24px] h-[24px] text-white" /> : <Close className="w-[24px] h-[24px] text-white" />} onClick={toggleMenu} />
                </div>
            </div>
        </div>

        {/* Mobile Menu */}

            <div ref={menuRef}  className={`md:hidden absolute top-full left-0 w-full bg-beige shadow-md transform transition-all duration-300 ease-out select-none ${
                isMenuOpen ? " visible opacity-80" : " invisible opacity-0"
              }`}
            >
            <ul className="flex flex-col p-4 text-primary">
                <li className="py-2">
                <Link to="/" onClick={toggleMenu}>
                    Home
                </Link>
                </li>
                <li className="py-2">
                <Link to="/about" onClick={toggleMenu}>
                    About
                </Link>
                </li>
                <li className="py-2">
                <Link to="/contact" onClick={toggleMenu}>
                    Contact
                </Link>
                </li>
            </ul>
            </div>
  
    </header>)
}

export default Header