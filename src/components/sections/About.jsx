import PrimaryButton from "../buttons/PrimaryButton"
import IpadMockup from "../../assets/ipad_mockup.png"
import { MainMaxW } from "../../config/style"


const About = () => {
    return (
    <section className={`${MainMaxW} w-full flex justify-center items-center`}>
        <div className="w-full flex flex-col md:flex-row gap-[40px]">
            <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:items-start flex-1">
                <h2 className="mb-[24px]">One Platform,<br/> Endless<br className="hidden md:block"/> Possibilities</h2>
                <p className="mb-[32px]">Get a glimpse of ARES in motion. From design to AI-powered insights, watch how ARES connects your favorite tools into one seamless ecosystem. No complicated setups—just pure productivity.</p>
                <PrimaryButton text={"See ARES in Action"} />
            </div>
            <div className="w-[calc(110%)] md:w-auto md:w-1/2 flex items-center flex-1 overflow-visible">
                <img className="w-full md:w-auto max-h-[431px] sm:max-h-max md:absolute 3xl:right-0" src={IpadMockup} />
            </div>
        </div>
    </section>)
}

export default About