import CracksLeft from "../../assets/cracks_left.png"
import CracksRighTop from "../../assets/cracks_right_top.png"
import CracksRighBottom from "../../assets/cracks_right_bottom.png"
import AresImage from "../../assets/ares.png"
import PrimaryButton from "../buttons/PrimaryButton"
import SecondaryButton from "../buttons/SecondaryButton"
import { Goggle } from "../../assets/svg"
//images
import { HERO_TOOLS } from "../../config"
import { MainMaxW } from "../../config/style"


const Hero = () => {
    return (
    <section 
        className="w-full pt-40 bg-custom-gradient relative flex flex-col items-center"
    >
        <div 
            className="absolute left-0 bottom-[-37px]"
            style={{
                mixBlendMode: 'multiply',
            }}
        >
            <img src={CracksLeft} />
        </div>
        <div 
            className="absolute right-0 top-[114px] 0 z-0"
            style={{
                mixBlendMode: 'multiply',
              }}
        >
            <img src={CracksRighTop} />
        </div>
        <div 
            className="absolute right-0 bottom-[23.14px] z-0"
            style={{
                mixBlendMode: 'multiply',
              }}
        >
            <img src={CracksRighBottom} />
        </div>
        <div 
            className="w-[1440px] h-[720px] absolute top-0 bg-custom-radial rounded-full opacity-80 filter-blur"
        >

        </div>

        <div className={`w-full h-full flex flex-col items-center z-10 relative px-5`}>

            <div 
                className="w-[1440px] h-[1000px] absolute top-[-500px] bg-custom-radial rounded-full opacity-80 filter-blur"
            >
            </div>

            <div className="max-w-[208.25px] md:max-w-[298.25px] lg:max-w-[342.125px] mb-[24px]">
                <img src={AresImage} />
            </div>

            <div className="flex flex-col items-center justify-center text-center mb-[32px]">
                <h1>Break Free: <br/> One Key to All <br className="lg:hidden"/> Your Software</h1>
            </div>

            <div className="text-center max-w-4xl mb-[40px]">
                <p>Skip paywalls effortlessly and access premium AI tools and partner software instantly with ARES. Stop juggling subscriptions—pay only for what you use, nothing more.</p>
            </div>

            <div className="w-full justify-center flex flex-col md:flex-row items-center gap-[16px]">
                <PrimaryButton text={"Start Free Trial"} />
                <SecondaryButton className="!text-white" text={"Sign in with google"} icon={<Goggle />} />
            </div>
        </div>

        <div className="w-full h-full flex flex-col items-center z-10">
            <div 
                className="w-full flex flex-col items-center gap-[20px] py-[60px]"
                style={{
                    background: 'linear-gradient(180deg, rgba(26, 22, 25, 0.00) 0%, #1A1619 100%)',
                }}
            >
                <p className="text-xs">ACCESS ALL THESE AI TOOLS WITH ARES</p>
                <div className="flex items-center gap-[16px] md:gap-[32px]">
                    {HERO_TOOLS.map( (i, index) => (
                        <div className="relative">
                            <div key={index} className="peer w-[40px] h-[40px] md:w-[80px] md:h-[80px] border border-beige-light rounded-[8px] md:rounded-[16px] overflow-hidden">
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
    </section>)
}

export default Hero