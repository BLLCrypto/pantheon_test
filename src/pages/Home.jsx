
import Compare from "../components/sections/Compare"
import Trial from "../components/sections/Trial"
import FAQ from "../components/sections/Faq"
import PremiumTools from "../components/sections/PremiumTools"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Solutions from "../components/sections/Solutions"
import Join from "../components/sections/Join"
import Passport from "../components/sections/Passport"
import Footer from "../components/Footer"


const Home = () => {
    return (
        <div className="w-full overflow-hidden">
            
            <div className="flex flex-col relative items-center pb-[60px] md:pb-[80px] gap-[60px] md:gap-[160px]">

                <Hero />

                <About />

                <Passport />

                <Solutions />

                <Join />

                <PremiumTools />

                <Compare />

                <Trial />

                <div className="w-full flex flex-col items-center gap-[100px]">
                    <FAQ />

                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default Home