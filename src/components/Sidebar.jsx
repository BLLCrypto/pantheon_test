import React, { useState } from "react";
import AresImage from "../assets/ares.png";
import ButtonSfere from "../assets/button_sfere.png";

const items = [
    "NEW CHAT",
    "LOAD CHAT",
    "IMAGE GENERATOR",
    "VOICE GENERATOR",
    "AI ALMANAC"
]

const SidebarButton = ({text, isCurrent}) => {
    return <button className="custom-clip-path absolute group-hover:bg-secondaryHover group-hover:text-white px-3 top-[1px] right-[1px] left-[1px] bottom-[1px] flex justify-between items-center">
        <span>{text}</span>
        {isCurrent &&  <img className="h-full" src={ButtonSfere}/>}

    </button>
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentItem, setCurrentItem] = useState(0)

  return (
      <div
        className={`${
          isOpen ? "w-96" : "w-0"
        } h-screen pt-24 transition-width duration-300 absolute`}
      >
        <div className="absolute top-0 z-0 h-full w-full bg-secondary bg-opacity-25"     style={{
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}></div>
        <div className={`w-full h-full z-10 relative flex flex-col justify-between ${isOpen ? "px-12 py-2" : "p-0"}`}>
            {isOpen && <>
                <div className="flex flex-col gap-4">
                <div className="text-white text-xl font-semibold">
                    <img src={AresImage} />
                </div>


                <ul className="mt-5">
                    {items.map( (i, index) => <li key={index} className={`group custom-clip-path-two relative text-secondary opacity-75 text-xl flex items-center h-10 cursor-pointer m-3 hover:bg-secondary  rounded-br-md border-secondary`}>
                    <SidebarButton text={i} isCurrent={index === currentItem} />
                    </li>)}
            
                </ul>
            </div>

            
            <div className={`w-full bottom-2 px-6 flex`}>
                <span className="text-xl opacity-75 text-secondary cursor-pointer">SETTINGS</span>
            </div>
            
            </>}


        </div>

      </div>
  );
}

export default Sidebar;
