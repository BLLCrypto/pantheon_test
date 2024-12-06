import { CheckMark, Flags, Glasses, Inovator } from "../../assets/svg"
import { MainMaxW } from "../../config/style"

const IndicatorRow = ({text}) => {
    return (
    <>
        <div className="w-full h-[1px] bg-gold bg-opacity-[0.08]"></div>
            <div className="flex items-center justify-start gap-[4px] text-0xs">
                <p className="text-start text-white">{text}</p>
        </div>
    </>
    )
}

const NormalRow = ({textOne, textTwo, number}) => {
    return (
    <>
        <div className="w-full h-[1px] bg-gold bg-opacity-[0.16]"></div>
        <div className="flex items-center justify-center gap-[8px] text-0xs">
            {number &&   <p className="text-center text-gold">{number}</p>}
            <div className="flex items-center justify-center gap-[4px]">
                <p className="text-center text-gold">{textOne}</p>
                {textTwo &&
                    <>            
                        <p className="text-center text-white opacity-[0.4]">/</p>
                        <p className="text-center text-white opacity-[0.4]">{textTwo}</p>
                    </>
                }
            </div>
        </div>
    </>
    )
}

const IndicatorsColumn = () => {
    return (
        <div className="w-full md:w-2/5 flex flex-col items-center border border-[rgba(0,0,0,0)] text-center gap-[32px] py-[48px] px-[24px]">
                <div className="flex flex-col items-center gap-[24px]">
                    <div className="w-[48px] h-[48px]">
                    </div>
                    <p className="font-text text-xl xl:text-2xl leading-[120%] opacity-0">Indicators</p>
                </div>

                <div className="w-full flex flex-col justify-start flex-1 leading-[160%] gap-[8px]">

                    <IndicatorRow text="Monthly Price" />

                    <IndicatorRow text="Monthly Credits" />

                    <IndicatorRow text="AI Almanac Access" />

                    <IndicatorRow text="GPT-4o Chatbot" />

                    <IndicatorRow text="Claude 3.5 Sonnet Chatbot" />

                    <IndicatorRow text="Stable Diffusion XL Image Generator" />

                    <IndicatorRow text="Flux Schnell Image Generator" />

                    <IndicatorRow text="ElevenLabs Voice Generator" />

                    <IndicatorRow text="Wolfram Alpha Math Solver" />

                    <IndicatorRow text="Perplexity AI Search Chatbot" />

                    <IndicatorRow text="GPT-4o + JigsawStack AI Search Chatbot" />

                    <IndicatorRow text="Claude 3.5 Sonnet + JigsawStack AI Search Chatbot" />
                    
                </div>
        </div>
    )
}

const NormalColumn = ({icon, title, items}) => {
    return (
        <div className="w-full md:w-1/5 bg-beige-light flex flex-col items-center text-center border border-gold-light gap-[32px] py-[48px] px-[24px]">
        <div className="flex flex-col items-center gap-[24px]">
            <div className="w-[48px] h-[48px] relative flex items-center justify-center">
                <div className="w-[24px] h-[24px] absolute rounded-[980px] bg-gold blur-[24px]"></div>
                {icon}
            </div>
       
            <p className="font-text text-xl xl:text-2xl leading-[120%]">{title}</p>

        </div>
        <div className="w-full flex flex-col justify-start flex-1 leading-[160%] gap-[8px]">
            {items.map( i => <NormalRow textOne={i.textOne} textTwo={i.texTwo} number={i.number} />)}            
        </div>
    </div>
    )
}

const Compare = () => {
    return (
        <section className={`relative ${MainMaxW} w-full flex flex-col justify-center items-center`}>

            <div 
                className="w-[1440px] h-[720px] absolute left-[-160px] bottom-[-140px] rounded-full opacity-80 z-0"
                style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                    filter: 'blur(150px)',
                }}
            ></div>

            <div 
                    className="w-[1440px] h-[720px] absolute left-[-160px] bottom-[-300px] rounded-full opacity-80"
                    style={{
                        background: 'rgba(244, 236, 181, 0.04)',
                        filter: 'blur(150px)',
                      }}
            ></div>


        <div className="w-full flex items-center justify-center mb-[40px] md:mb-[80px] text-center">
            <h2>Compare Features <br className="block md:hidden"/> Across Plans</h2>
        </div>

        <div className="w-full mb-[60px] flex flex-col md:flex-row gap-[12px]">

            <IndicatorsColumn />

            <NormalColumn 
                icon={<Glasses  className="w-full h-full" />} 
                title="Explorer"
                items={
                    [
                        {textOne: "$9.99"},
                        {textOne: "700"},
                        {textOne:  <CheckMark className="w-[24x] h-[24px] my-[8px]" />},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "3"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "7"},
                        {textOne:  "Credit", texTwo: "Message", number: "7"},
                    ]
                } 
            />

            <NormalColumn 
                icon={<Inovator  className="w-full h-full" />} 
                title="Innovator"
                items={
                    [
                        {textOne: "$9.99"},
                        {textOne: "700"},
                        {textOne:  <CheckMark className="w-[24x] h-[24px] my-[8px]" />},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "3"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "7"},
                        {textOne:  "Credit", texTwo: "Message", number: "7"},
                    ]
                } 
            />

            <NormalColumn 
                icon={<Flags className="w-full h-full" />} 
                title="Pioneer"
                items={
                    [
                        {textOne: "$9.99"},
                        {textOne: "700"},
                        {textOne:  <CheckMark className="w-[24x] h-[24px] my-[8px]" />},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "3"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "1"},
                        {textOne:  "Credit", texTwo: "Message", number: "7"},
                        {textOne:  "Credit", texTwo: "Message", number: "7"},
                    ]
                } 
            />

        </div>
    </section>
    )
}
export default Compare