import { CheckMark, Flags, Glasses, Inovator } from "../../assets/svg"
import PrimaryButton from "../buttons/PrimaryButton"
import Mosaic from "../Mosaic"

const Trial = () => {
    return (
        <section className="w-full max-w-7xl flex flex-col justify-center items-center">
            <div className="w-full bg-beige-light flex justify-between items-center border border-gold-light p-[72px]">
              <div className="w-full flex justify-between items-center overflow-hidden relative">
                <div className="">
                    <div className="mb-[24px] leading-[110%]">                    
                        <h2 className="text-4xl mb-[24px]">Start<br/> Your 7-Day<br/> Free Trial</h2>
                    </div>
                    <div className="flex flex-col gap-[16px] mb-[32px] text-[18px] leading-[160%]">
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
                    <div>
                        <PrimaryButton text="Start Free Trial" />
                    </div>
                </div>
                <div className="">
                    <Mosaic />
                </div>
              </div>
            </div>
    </section>
    )
}
export default Trial