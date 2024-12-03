

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
import { Star } from "../assets/svg"
import Mosaic from "../components/Mosaic"
import Compare from "../components/sections/Compare"
import Trial from "../components/sections/Trial"
import FAQ from "../components/sections/Faq"
import PremiumTools from "../components/sections/PremiumTools"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Solutions from "../components/sections/Solutions"
import Join from "../components/sections/Join"
import Passport from "../components/sections/Passport"


const Home = () => {
    return (
        <div className="w-full overflow-hidden">
            
            <div className="flex flex-col relative items-center pb-[80px] gap-[160px]">

                <Hero />

                <About />

                <Passport />

                <Solutions />

                <Join />

                <PremiumTools />

                <Compare />

                <Trial />

                <FAQ />

            </div>
        </div>
    )
}

export default Home