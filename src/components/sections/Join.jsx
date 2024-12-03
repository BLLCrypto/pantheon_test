import { MainMaxW } from "../../config/style"
import PrimaryButton from "../buttons/PrimaryButton"

const Join = () => {
    return (
        <section className={`${MainMaxW} w-full flex flex-col justify-center items-center`}>

            <div className="w-full flex flex-col items-center md:flex-row md:items-end md:justify-between mb-[80px] text-center gap-[40px]">
                <h2>Join 12,340 <br className="block md:hidden"/> Tech Rebels</h2>
                <PrimaryButton text="Start Free Trial" />
            </div>

            <div className="w-full mb-[60px] flex flex-col items-center md:items-stretch md:flex-row gap-[32px] md:gap-[16px] lg:gap-[32px] leading-[140%]">

                <div className="w-full max-w-[500px] md:max-w-full md:w-1/3 bg-beige-light flex flex-col items-center text-center border border-gold-light">
                    <div className="p-[32px] md:p-[24px] lg:p-[48px]">
                        <p>“Instead of paying $100s per month for software, I pay just $19 with ARES.”</p>
                    </div>
                    <div className="w-full bg-white bg-opacity-[0.04] flex flex-col justify-center p-[32px] flex-1">
                        <p>Rachita & John</p>
                        <p className="opacity-60">Shrub Finance</p>
                    </div>
                </div>

                <div className="w-full max-w-[500px] md:max-w-full md:w-1/3 bg-beige-light flex flex-col items-center text-center border border-gold-light">
                    <div className="p-[32px] md:p-[24px] lg:p-[48px]">
                        <p>“Instead of paying $100s per month for software, I pay just $19 with ARES.”</p>
                    </div>
                    <div className="w-full bg-white bg-opacity-[0.04] flex flex-col justify-center p-[32px] flex-1">
                        <p>Daniela A.</p>
                    </div>
                </div>

                <div className="w-full max-w-[500px] md:max-w-full md:w-1/3 bg-beige-light flex flex-col items-center text-center border border-gold-light">
                    <div className="p-[32px] md:p-[24px] lg:p-[48px]">
                        <p>“Instead of paying $100s per month for software, I pay just $19 with ARES.”</p>
                    </div>
                    <div className="w-full bg-white bg-opacity-[0.04] flex flex-col justify-center p-[32px] flex-1">
                        <p>Pat S.</p>
                        <p className="opacity-60">AccelB</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Join