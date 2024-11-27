
import CracksLeft from "../assets/cracks_left.png"
import CracksRighTop from "../assets/cracks_right_top.png"
import CracksRighBottom from "../assets/cracks_right_bottom.png"
import AresImage from "../assets/ares.png"
import PrimaryButton from "../components/buttons/PrimaryButton"
import SecondaryButton from "../components/buttons/SecondaryButton"

//tools
import ToolOne from "../assets/tool_01.png"
import ToolTwo from "../assets/tool_02.png"
import ToolThree from "../assets/tool_03.png"
import ToolFour from "../assets/tool_04.svg"
import ToolFive from "../assets/tool_05.png"
import ToolSix from "../assets/tool_06.png"
import ToolSeven from "../assets/tool_07.png"
import ToolEigth from "../assets/tool_08.png"

const items = [{image:ToolOne},{image:ToolTwo},{image:ToolThree},{image:ToolFour},{image:ToolFive},{image:ToolSix},{image:ToolSeven},{image:ToolEigth}]

const Home = () => {
    return (
        <div className="w-full">
            <section className="w-full pt-40 min-h-screen bg-custom-gradient relative flex justify-center">
                <div className="absolute left-0 bottom-0 z-0">
                    <img src={CracksLeft} />
                </div>
                <div className="absolute right-0 top-0 z-0">
                    <img src={CracksRighTop} />
                </div>
                <div className="absolute right-0 bottom-0 z-0">
                    <img src={CracksRighBottom} />
                </div>
                <div className="w-full h-full absolute bg-custom-radial top-[-30%] rounded-full opacity-80 filter-blur"></div>

                <div className="w-full h-full max-w-7xl flex flex-col items-center z-10">
                    <div className="max-w-[342.125px] mb-[24px]">
                        <img src={AresImage} />
                    </div>

                    <div className="flex flex-col items-center justify-center text-gold text-shadow-glow mb-[32px]"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #FAF2DB 0%, #EFDE8A 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                        <h1 className="text-5xl leading-[110%]">Break Free:</h1>
                        <h1 className="text-5xl leading-[110%]">One Key to All Your Software</h1>
                    </div>

                    <div className="text-center max-w-4xl mb-[40px]">
                        <p>Skip paywalls effortlessly and access premium AI tools and partner software instantly with ARES. Stop juggling subscriptions—pay only for what you use, nothing more.</p>
                    </div>

                    <div className="flex items-center gap-3 mb-[60px]">
                        <PrimaryButton text={"Start Free Trial"} />
                        <SecondaryButton text={"Sign in with google"} />
                    </div>

                    <div className="w-full flex flex-col items-center gap-[20px] mb-[60px] ">
                        <p>ACCESS ALL THESE AI TOOLS WITH ARES</p>
                        <div className="flex items-center gap-[32px]">
                            {items.map( (i, index) => (
                                <div className="relative">
                                    <div key={index} className="peer w-[80px] h-[80px] border border-beige-light rounded-[16px] overflow-hidden">
                                        <img className="w-full h-full" src={i.image} />
                                    </div>
                                    {/* Tooltip */}
                                    <div className="w-[274px] flex flex-col items-center text-center invisible absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 peer-hover:translate-y-0 peer-hover:opacity-100 duration-300 ease-out mb-[20px] px-[16px] py-[12px] text-sm text-white bg-black  rounded-[8px] peer-hover:pointer-events-auto peer-hover:visible duration-300 leading-[160%] border border-brown">
                                        <h3 className="">FLUX1.1</h3>
                                        <p className="text-2xs">Flux prioritizes producing consistently high-quality, detailed images with minimal effort.</p>
                                    </div>
                                </div>
                        
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home