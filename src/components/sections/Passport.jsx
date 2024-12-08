import { MainMaxW } from "../../config/style"
import SecondaryButton from "../buttons/SecondaryButton"
import Mosaic from "../Mosaic"


const Passport = () => {
    return (
        <section className={`${MainMaxW} w-full flex justify-center items-center`}>
        <div className="w-full flex flex-col-reverse md:flex-row gap-[40px]">
            <div className="w-full md:w-1/2 flex items-center flex-1 relative">
                <div 
                    className="w-[1440px] h-[720px] absolute left-[-450px] top-[-152px] rounded-full opacity-80"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                        filter: 'blur(150px)',
                    }}
                >
                </div>
                <div className="w-full md:w-auto md:absolute md:right-0">
                    <Mosaic />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col flex-1">
                <div className="w-full flex flex-col items-center justify-center md:items-start h-full 3xl:pl-[40px]">
                    <h2 className="mb-[24px] text-center md:text-left">Your Passport to<br/> Partnered Apps</h2>
                    <p className="mb-[48px] text-center md:text-left">Coming soon: Log into all your favorite apps with just one click using Sign in with ARES. Forget juggling passwords—this feature keeps your apps connected, your preferences synced, and your projects secure.</p>
                    <SecondaryButton text={"Coming Soon: Stay Updated"} />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Passport