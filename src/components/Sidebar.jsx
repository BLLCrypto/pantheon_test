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
    return <button className="flex w-full h-full justify-between items-center">
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
        <div className="absolute top-0 z-0 h-full w-full bg-orange bg-opacity-25"     style={{
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}></div>
        <div className={`w-full h-full z-10 relative flex flex-col justify-between ${isOpen ? "px-10 py-2" : "p-0"}`}>
            {isOpen && <>
                <div className="flex flex-col gap-4">
                <div className="text-white text-xl font-semibold">
                    <img src={AresImage} />
                </div>


                <ul className="mt-5">
                    {items.map( (i, index) => <li key={index} className={`text-gray text-lg flex items-center h-10 cursor-pointer px-3 m-3 hover:border-2 hover:bg-white hover:bg-opacity-10 rounded-br-md border-gray`}>
                    <SidebarButton text={i} isCurrent={index === currentItem} />
                    </li>)}
            
                </ul>
            </div>

            
            <div className={`w-full bottom-2 px-6 flex`}>
                <span className="text-gray cursor-pointer">SETTINGS</span>
            </div>
            
            </>}


        </div>

      </div>
  );
}

export default Sidebar;
