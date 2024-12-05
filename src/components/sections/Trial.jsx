import { CheckMark, Flags, Glasses, Inovator } from "../../assets/svg"
import { MainMaxW } from "../../config/style"
import PrimaryButton from "../buttons/PrimaryButton"
import Mosaic from "../Mosaic"

const Trial = () => {
    return (
        <section className={`${MainMaxW} w-full flex flex-col justify-center items-center`}>
            <div className="w-full bg-beige-light flex justify-between items-center border border-gold-light p-[32px] md:p-[72px]  overflow-hidden">
              <div className="w-full flex flex-col md:flex-row justify-between items-center overflow-visible relative gap-[40px]">
                <div className="w-full md:min-w-max">
                    <div className="mb-[24px] leading-[110%] text-center md:text-left">                    
                        <h2 className="mb-[24px]">Start<br className="hidden md:block"/> Your 7-Day<br/> Free Trial</h2>
                    </div>
                    <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-[16px] mb-[32px] text-0xs leading-[160%]">
                        <p>See How Much You’ll Save</p>
                        <div className="flex flex-col gap-[8px]">
                            <div className="flex items-center gap-[16px] text-gold">
                                <CheckMark className="w-[24px] h-[24px]" />
                                <p>Secure Payments</p>
                            </div>
                            <div className="flex items-center gap-[16px] text-gold">
                                <CheckMark className="w-[24px] h-[24px]" />
                                <p>Privacy Guaranteed</p>
                            </div>
                            <div className="flex items-center gap-[16px] text-gold">
                                <CheckMark className="w-[24px] h-[24px]" />
                                <p>Cancel Anytime</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center md:justify-start items-center">
                        <PrimaryButton text="Start Free Trial" />
                    </div>
                </div>
                <div className="relative flex-1">
                    <div 
                        className="w-[1440px] h-[720px] absolute left-[-484px] top-[-152px] rounded-full opacity-80"
                        style={{
                            background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                            filter: 'blur(150px)',
                        }}
                    >
                    </div>
                    <Mosaic />
                </div>
              </div>
            </div>
    </section>
    )
}
export default Trial