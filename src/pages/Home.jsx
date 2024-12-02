
import CracksLeft from "../assets/cracks_left.png"
import CracksRighTop from "../assets/cracks_right_top.png"
import CracksRighBottom from "../assets/cracks_right_bottom.png"
import AresImage from "../assets/ares.png"
import PrimaryButton from "../components/buttons/PrimaryButton"
import SecondaryButton from "../components/buttons/SecondaryButton"

//images
// Hero - tools
import ToolOne from "../assets/tool_01.png"
import ToolTwo from "../assets/tool_02.png"
import ToolThree from "../assets/tool_03.png"
import ToolFour from "../assets/tool_04.svg"
import ToolFive from "../assets/tool_05.png"
import ToolSix from "../assets/tool_06.png"
import ToolSeven from "../assets/tool_07.png"
import ToolEigth from "../assets/tool_08.png"

//
import IpadMockup from "../assets/ipad_mockup.png"
import { CheckMark, Glasses, Star } from "../assets/svg"
import Mosaic from "../components/Mosaic"
import Compare from "../components/sections/Compare"
import Trial from "../components/sections/Trial"
import FAQ from "../components/sections/Faq"


const items = [
    {
        name: "FLUX1.1",
        description: "Flux prioritizes producing consistently high-quality, detailed images with minimal effort.",
        image:ToolOne
    },
    {
        name: "FLUX1.1",
        description: "Flux prioritizes producing consistently high-quality, detailed images with minimal effort.",
        image:ToolTwo
    },
    {
        name: "FLUX1.1",
        description: "Flux prioritizes producing consistently high-quality, detailed images with minimal effort.",
        image:ToolThree
    },
    {
        name: "FLUX1.1",
        description: "Flux prioritizes producing consistently high-quality, detailed images with minimal effort.",
        image:ToolFour
    },
    {
        name: "FLUX1.1",
        description: "Flux prioritizes producing consistently high-quality, detailed images with minimal effort.",
        image:ToolFive
    },
    {
        name: "FLUX1.1",
        description: "Flux prioritizes producing consistently high-quality, detailed images with minimal effort.",
        image:ToolSix
    },
    {
        name: "FLUX1.1",
        description: "Flux prioritizes producing consistently high-quality, detailed images with minimal effort.",
        image:ToolSeven
    },
    {
        name: "FLUX1.1",
        description: "Flux prioritizes producing consistently high-quality, detailed images with minimal effort.",
        image:ToolEigth
    }
]

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

                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-5xl">Break Free: <br/> One Key to All Your Software</h1>
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
                                    <div className="w-[274px] flex flex-col items-center text-center invisible absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 peer-hover:translate-y-0 peer-hover:opacity-100 duration-300 ease-out mb-[20px] px-[16px] py-[12px] text-sm text-white bg-black  rounded-[8px] peer-hover:pointer-events-auto peer-hover:visible duration-300 border border-brown">
                                        <p className="text-gold text-sm uppercase tracking-[2px] leading-[160%]">{i.name}</p>
                                        <p className="text-2xs leading-[160%]">{i.description}</p>
                                    </div>
                                </div>
                        
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col relative items-center pt-[100px] pb-[80px] gap-[160px]">
                <section className="w-full max-w-7xl flex justify-center items-center">
                    <div className="w-full flex gap-[40px]">
                        <div className="w-1/2 flex flex-col flex-1">
                            <h2 className="text-4xl mb-[24px]">One Platform,<br/> Endless<br/> Possibilities</h2>
                            <p className="mb-[48px]">Get a glimpse of ARES in motion. From design to AI-powered insights, watch how ARES connects your favorite tools into one seamless ecosystem. No complicated setups—just pure productivity.</p>
                            <PrimaryButton text={"See ARES in Action"} />
                        </div>
                        <div className="w-1/2 flex items-center flex-1 overflow-visible">
                            <img className="absolute right-0 " src={IpadMockup} />
                        </div>
                    </div>
                </section>
                <section className="w-full max-w-7xl flex justify-center items-center">
                    <div className="w-full flex gap-[40px]">
                        <div className="w-1/2 flex items-center flex-1 relative">
                            <div className="absolute right-0">
                                <Mosaic />
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col flex-1">
                            <div className="w-full h-full pl-[40px]">
                                <h2 className="text-4xl mb-[24px]">Your Passport to<br/> Partnered Apps</h2>
                                <p className="mb-[48px]">Coming soon: Log into all your favorite apps with just one click using Sign in with ARES. Forget juggling passwords—this feature keeps your apps connected, your preferences synced, and your projects secure.</p>
                                <SecondaryButton text={"Coming Soon: Stay Updated"} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-7xl flex flex-col justify-center items-center">
                    <div className="flex items-center mb-[80px]">
                        <h2 className="text-4xl">All-in-One Solution for Your Needs</h2>
                    </div>
                    <div className="w-full mb-[60px] flex gap-[32px]">
                        <div className="w-2/5 bg-beige-light flex flex-col items-center text-center border border-gold-light p-[48px]">
                            <p className="text-gold text-xs mb-[12px] tracking-[1.4px] uppercase">Your All-Access Pass</p>
                            <p className="text-2xl font-text leading-[120%] mb-[24px]">Ultimate <br/> Access Pass</p>
                            <div className="w-full flex flex-col gap-[16px] mb-[32px]">
                                <div className="w-full flex text-start gap-[16px]">
                                    <div className="relative w-[28px] h-[28px]">
                                        <div className="absolute top-0 w-full h-full bg-gold bg-opacity-15 rounded-[980px] filter blur-24">
                                        </div>
                                        <Star className="w-[28px] h-[28px]" />
                                    </div>
                                    <p className="leading-[160%] text-xs">Instant access to GPT-4, Claude, and other premium AI tools</p>
                                </div>
                                <div className="w-full flex text-start gap-[16px]">
                                    <div className="relative w-[28px] h-[28px]">
                                        <div className="absolute top-0 w-full h-full bg-gold bg-opacity-15 rounded-[980px] filter blur-24">
                                        </div>
                                        <Star className="w-[28px] h-[28px]" />
                                    </div>
                                    <p className="leading-[160%] text-xs">Sign in with ARES" across partner platforms (coming soon)</p>
                                </div>
                                <div className="w-full flex text-start gap-[16px]">
                                    <div className="relative w-[28px] h-[28px]">
                                        <div className="absolute top-0 w-full h-full bg-gold bg-opacity-15 rounded-[980px] filter blur-24">
                                        </div>
                                        <Star className="w-[28px] h-[28px]" />
                                    </div>
                                    <p className="leading-[160%] text-xs">One account, infinite possibilities</p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="relative top-[40px] flex flex-col gap-[20px]">
                                    <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
                                        <img className="w-full h-full" src={ToolSeven} />
                                    </div>
                                    <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
                                        <img className="w-full h-full" src={ToolTwo} />
                                    </div>
                                    <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
                                        <img className="w-full h-full" src={ToolThree} />
                                    </div>
                                    <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
                                        <img className="w-full h-full" src={ToolFour} />
                                    </div>
                                    <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
                                        <img className="w-full h-full" src={ToolFive} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/5 flex flex-col gap-[32px]">

                            <div className="w-full h-1/2 bg-beige-light flex border border-gold-light p-[48px] gap-[32px]">

                                <div className="flex flex-col">
                                    <p className="text-gold text-xs mb-[12px] tracking-[1.4px] uppercase">Ridiculously Easy</p>
                                    <p className="text-2xl font-text leading-[120%] mb-[24px]">So Easy, It Feels Illegal 
                                        <br/>(It's Not)
                                    </p>
                                    <div className="w-full flex flex-col gap-[16px] mb-[32px]">
                                        <div className="w-full flex text-start gap-[16px]">
                                            <div className="relative w-[28px] h-[28px]">
                                                <div className="absolute top-0 w-full h-full bg-gold bg-opacity-15 rounded-[980px] filter blur-24">
                                                </div>
                                                <Star className="w-[28px] h-[28px]" />
                                            </div>
                                            <p className="leading-[160%] text-xs">One unified dashboard</p>
                                        </div>
                                        <div className="w-full flex text-start gap-[16px]">
                                            <div className="relative w-[28px] h-[28px]">
                                                <div className="absolute top-0 w-full h-full bg-gold bg-opacity-15 rounded-[980px] filter blur-24">
                                                </div>
                                                <Star className="w-[28px] h-[28px]" />
                                            </div>
                                            <p className="leading-[160%] text-xs">Seamless switching between tools</p>
                                        </div>
                                        <div className="w-full flex text-start gap-[16px]">
                                            <div className="relative w-[28px] h-[28px]">
                                                <div className="absolute top-0 w-full h-full bg-gold bg-opacity-15 rounded-[980px] filter blur-24">
                                                </div>
                                                <Star className="w-[28px] h-[28px]" />
                                            </div>
                                            <p className="leading-[160%] text-xs">No more password juggling</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1"></div>

                            </div>

                            <div className="w-full h-1/2 bg-beige-light flex border border-gold-light p-[48px] gap-[32px]">

                                <div className="flex-1"></div>

                                <div className="flex flex-col">
                                    <p className="text-gold text-xs mb-[12px] tracking-[1.4px] uppercase">Ridiculously Easy</p>
                                    <p className="text-2xl font-text leading-[120%] mb-[24px]">Only Pay For Your Use,<br/>
                                        Every Dollar Counts
                                    </p>
                                    <div className="w-full flex flex-col gap-[16px] mb-[32px]">
                                        <div className="w-full flex text-start gap-[16px]">
                                            <div className="relative w-[28px] h-[28px]">
                                                <div className="absolute top-0 w-full h-full bg-gold bg-opacity-15 rounded-[980px] filter blur-24">
                                                </div>
                                                <Star className="w-[28px] h-[28px]" />
                                            </div>
                                            <p className="leading-[160%] text-xs">No wasted subscriptions</p>
                                        </div>
                                        <div className="w-full flex text-start gap-[16px]">
                                            <div className="relative w-[28px] h-[28px]">
                                                <div className="absolute top-0 w-full h-full bg-gold bg-opacity-15 rounded-[980px] filter blur-24">
                                                </div>
                                                <Star className="w-[28px] h-[28px]" />
                                            </div>
                                            <p className="leading-[160%] text-xs">Flexible credit system</p>
                                        </div>
                                        <div className="w-full flex text-start gap-[16px]">
                                            <div className="relative w-[28px] h-[28px]">
                                                <div className="absolute top-0 w-full h-full bg-gold bg-opacity-15 rounded-[980px] filter blur-24">
                                                </div>
                                                <Star className="w-[28px] h-[28px]" />
                                            </div>
                                            <p className="leading-[160%] text-xs">Real-time tracking</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <p className="text-[18px]">We're constantly adding new partners to expand your access — all at no extra cost.</p>
                </section>

                <section className="w-full max-w-7xl flex flex-col justify-center items-center">

                    <div className="w-full flex items-end justify-between mb-[80px]">
                        <h2 className="text-4xl">Join 12,340 Tech Rebels</h2>
                        <PrimaryButton text="Start Free Trial" />
                    </div>

                    <div className="w-full mb-[60px] flex gap-[32px] leading-[140%]">

                        <div className="w-1/3 bg-beige-light flex flex-col items-center text-center border border-gold-light">
                            <div className="p-[48px]">
                                <p>“Instead of paying $100s per month for software, I pay just $19 with ARES.”</p>
                            </div>
                            <div className="w-full bg-white bg-opacity-[0.04] flex flex-col justify-center p-[32px] flex-1">
                                <p>Rachita & John</p>
                                <p className="opacity-60">Shrub Finance</p>
                            </div>
                        </div>

                        <div className="w-1/3 bg-beige-light flex flex-col items-center text-center border border-gold-light">
                            <div className="p-[48px]">
                                <p>“Instead of paying $100s per month for software, I pay just $19 with ARES.”</p>
                            </div>
                            <div className="w-full bg-white bg-opacity-[0.04] flex flex-col justify-center p-[32px] flex-1">
                                <p>Daniela A.</p>
                            </div>
                        </div>

                        <div className="w-1/3 bg-beige-light flex flex-col items-center text-center border border-gold-light">
                            <div className="p-[48px]">
                                <p>“Instead of paying $100s per month for software, I pay just $19 with ARES.”</p>
                            </div>
                            <div className="w-full bg-white bg-opacity-[0.04] flex flex-col justify-center p-[32px] flex-1">
                                <p>Pat S.</p>
                                <p className="opacity-60">AccelB</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-7xl flex flex-col justify-center items-center">

                    <div className="w-full flex items-center justify-center mb-[80px]">
                        <h2 className="text-4xl">Premium Tools, Ready to Roll</h2>
                    </div>

                    <div className="w-full mb-[60px] flex gap-[32px] leading-[140%]">

                        <div className="w-1/3 bg-beige-light flex flex-col items-center border border-gold-light">
                            <div className="w-full h-[240px] bg-orange">
                                
                            </div>
                            <div className="flex flex-col p-[48px] flex-1 gap-[16px]">
                                <p className="font-text text-2xl">GPT-4o</p>
                                <p>Chat with OpenAI’s most advanced AI model.</p>
                            </div>
                        </div>

                        <div className="w-1/3 bg-beige-light flex flex-col items-center border border-gold-light">
                            <div className="w-full h-[240px] bg-orange">
                                
                            </div>
                            <div className="flex flex-col p-[48px] flex-1 gap-[16px]">
                                <p className="font-text text-2xl">Claude</p>
                                <p>Generate complex discussions with ease.</p>
                            </div>
                        </div>

                        <div className="w-1/3 bg-beige-light flex flex-col items-center border border-gold-light">
                            <div className="w-full h-[240px] bg-orange">
                                
                            </div>
                            <div className="flex flex-col p-[48px] flex-1 gap-[16px]">
                                <p className="font-text text-2xl">Stable Diffusion</p>
                                <p>Create breathtaking visual art.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Compare />

                <Trial />

                <FAQ />
            </div>
        </div>
    )
}

export default Home