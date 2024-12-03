import { Star } from "../../assets/svg"
import { HERO_TOOLS } from "../../config"
import { MainMaxW } from "../../config/style"

const Solutions = () => {
    return (
        <section className={`${MainMaxW} w-full flex flex-col justify-center items-center`}>
        <div className="flex items-center mb-[80px] text-center">
            <h2>All-in-One Solution for Your Needs</h2>
        </div>
        <div className="w-full mb-[60px] flex flex-col md:flex-row gap-[32px]">
            <div className="w-full md:w-2/5 bg-beige-light flex flex-col items-center text-center border border-gold-light p-[48px]">
                <p className="text-gold text-xs mb-[12px] tracking-[1.4px] uppercase">Your All-Access Pass</p>
                <p className="text-xl xl:text-2xl font-text leading-[120%] mb-[24px]">Ultimate <br/> Access Pass</p>
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
                            <img className="w-full h-full" src={HERO_TOOLS[6].image} />
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
                    </div>
                </div>
            </div>
            
            <div className="w-full md:w-3/5 flex flex-col gap-[32px]">

                <div className="w-full h-1/2 bg-beige-light flex border border-gold-light p-[48px] gap-[32px]">

                    <div className="flex flex-col">
                        <p className="text-gold text-xs mb-[12px] tracking-[1.4px] uppercase">Ridiculously Easy</p>
                        <p className="text-xl xl:text-2xl font-text leading-[120%] mb-[24px]">So Easy, It Feels Illegal 
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
                        <p className="text-xl xl:text-2xl font-text leading-[120%] mb-[24px]">Only Pay For Your Use,<br/>
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