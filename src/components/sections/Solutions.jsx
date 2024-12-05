import { Star } from "../../assets/svg"
import { HERO_TOOLS } from "../../config"
import { MainMaxW } from "../../config/style"

const ToolsContainer = ({className}) => {
    return ( <div className={`absolute flex gap-[20px] ${className}`}>
        <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
            <img className="w-full h-full" src={HERO_TOOLS[0].image} />
        </div>
        <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
            <img className="w-full h-full" src={HERO_TOOLS[1].image} />
        </div>
        <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
            <img className="w-full h-full" src={HERO_TOOLS[2].image} />
        </div>
        <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
            <img className="w-full h-full" src={HERO_TOOLS[3].image} />
        </div>
        <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
            <img className="w-full h-full" src={HERO_TOOLS[4].image} />
        </div>
        <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
            <img className="w-full h-full" src={HERO_TOOLS[5].image} />
        </div>
        <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
            <img className="w-full h-full" src={HERO_TOOLS[6].image} />
        </div>
        <div className="peer w-[44px] h-[44px] border border-beige-light rounded-[8px] overflow-hidden">
            <img className="w-full h-full" src={HERO_TOOLS[7].image} />
        </div>
    </div>)
}

const Solutions = () => {
    return (
        <section className={`${MainMaxW} w-full flex flex-col justify-center items-center relative`}>
            <div 
                className="w-[1440px] h-[720px] absolute left-[-160px] bottom-[-140px] rounded-full opacity-80"
                style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                    filter: 'blur(150px)',
                }}
            ></div>
            <div className="flex items-center mb-[40px] md:mb-[80px] text-center">
                <h2>All-in-One Solution for Your Needs</h2>
            </div>
            <div className="w-full mb-[60px] flex flex-col md:flex-row gap-[32px] relative">

                <div 
                    className="w-[1440px] h-[720px] absolute left-[-160px] bottom-[-336px] rounded-full opacity-80"
                    style={{
                        background: 'rgba(244, 236, 181, 0.04)',
                        filter: 'blur(150px)',
                      }}
                ></div>

                <div className="relative w-full md:w-2/5 bg-beige-light flex flex-col items-center text-center border border-gold-light p-[48px] overflow-hidden">
                    <div 
                        className="w-[434px] h-[434px] absolute left-[-41px] bottom-[-217px] rounded-full opacity-80"
                        style={{
                            background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                            filter: 'blur(50px)',
                          }}
                    ></div>
                    <p className="text-gold text-xs mb-[12px] tracking-[1.4px] uppercase">Your All-Access Pass</p>
                    <p className="text-xl xl:text-2xl font-text leading-[120%] mb-[24px]">Ultimate <br/> Access Pass</p>

                    <div className="w-full max-w-[300px] md:max-full flex flex-col gap-[16px] mb-[32px]">
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

                    <div className="w-full min-h-[308px] flex justify-center relative flex-1">
                    <ToolsContainer className="top-[40px] flex-col" />
                    </div>

                </div>
                
                <div className="w-full md:w-3/5 flex flex-col gap-[32px]">

                    <div className="relative w-full h-1/2 bg-beige-light flex flex-col md:flex-row items-center md:items-start border border-gold-light p-[48px] gap-[32px]">

                        <div 
                            className="w-[434px] h-[434px] absolute left-[151px] bottom-[-217px] rounded-full opacity-80"
                            style={{
                                background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                                filter: 'blur(50px)',
                            }}
                        ></div>

                        <div className="max-w-[300px] md:max-w-[368px] flex flex-col">
                            <p className="text-gold text-xs mb-[12px] tracking-[1.4px] uppercase text-center md:text-left">Ridiculously Easy</p>
                            <p className="text-xl xl:text-2xl font-text leading-[120%] mb-[24px] text-center md:text-left">So Easy, <br className="block md:hidden"/> It Feels Illegal <br className="block md:hidden"/> (It's Not)
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

                        <div className="flex flex-col justify-center items-center flex-1 h-full gap-[8px]">

                        <div className="min-w-[162.5px] h-max flex p-[10px] pr-[20px] rounded-[20px] border border-[rgba(0,0,0,0)] bg-[#2A232D] opacity-50">
                                <div className="w-full flex items-center justify-start gap-[10px]">
                                    <div className="w-[50px] h-[50px] bg-white-extra-extra-dark rounded-[10px] overflow-hidden">
                                        <img className="w-full h-full" src={HERO_TOOLS[2]?.image} />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-xs">Claude</p>
                                        <p className="text-2xs text-gray">3.5 Haiku</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[49px] flex items-center">
                                <div className="w-[49px] h-[1px] rotate-90" style={{
                                        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.60) 100%)',
                                    }}
                                >
                                </div>
                            </div> 

                            <div className="min-w-[162.5px] h-max flex p-[10px] pr-[20px] rounded-[20px] border border-gold">
                                <div className="w-full flex items-center justify-start gap-[10px]">
                                    <div className="w-[50px] h-[50px] bg-white-extra-extra-dark rounded-[10px] overflow-hidden">
                                        <img className="w-full h-full" src={HERO_TOOLS[3]?.image} />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-xs">ChatGPT</p>
                                        <p className="text-2xs text-gray">o1 Preview</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="relative  w-full h-1/2 bg-beige-light flex flex-col-reverse md:flex-row items-center border border-gold-light p-[48px] gap-[32px] overflow-hidden">

                        <div 
                            className="w-[434px] h-[434px] absolute left-[151px] bottom-[-217px] rounded-full opacity-80"
                            style={{
                                background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                                filter: 'blur(50px)',
                            }}
                        ></div>

                        <div className="w-full max-w-[300px] md:max-w-full flex flex-col md:flex-row items-center flex-1 gap-[8px]">
                            <div className="w-full md:w-max h-max flex p-[10px] pl-[20px] md:pl-[10px] md:pt-[20px] rounded-[20px] border border-gold">
                                <div className="w-full md:max-w-auto flex md:flex-col items-center gap-[30px] md:gap-[20px]">
                                    <div className="flex flex-col items-center">
                                        <p className="text-xs">Savings</p>
                                        <p className="text-2xs text-gray">Monthly</p>
                                    </div>
                                    <div className="flex flex-1 flex-col items-center p-[10px] bg-white-extra-extra-dark rounded-[10px]">
                                        <p className="text-2xl font-text leading-[120%] line-through">$230</p>
                                        <p className="text-gray text-2xs leading-[140%]">USD</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[49px] h-[1px] hidden md:block" style={{
                                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.60) 100%)',
                                }}
                            >
                            </div>

                            <div className="h-[49px] flex items-center block md:hidden">
                                <div className="w-[49px] h-[1px] rotate-90" style={{
                                        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.60) 100%)',
                                    }}
                                >
                                </div>
                            </div>

                            <div className="h-full flex flex-1 items-center relative min-w-[44px]">
                                <ToolsContainer className="relative md:absolute flex-row md:flex-col" />
                            </div>
                        </div>

                        <div className="max-w-[300px] md:max-w-[336px] flex flex-col">
                            <p className="text-gold text-xs mb-[12px] tracking-[1.4px] uppercase text-center md:text-left">Ridiculously Easy</p>
                            <p className="text-xl xl:text-2xl font-text leading-[120%] mb-[24px] text-center md:text-left">Only Pay For Your Use,
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
            <p className="text-0xs text-center">We're constantly adding new partners to expand your access — all at no extra cost.</p>
        </section>
    )
}

export default Solutions