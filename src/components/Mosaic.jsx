import MosaicOne from "../assets/mosaic01.jpg"
import MosaicTwo from "../assets/tool_04.svg"
import MosaicThree from "../assets/mosaic03.jpg"
import MosaicFour from "../assets/mosaic04.jpg"
import MosaicFive from "../assets/tool_06.png"
import MosaicSix from "../assets/mosaic06.jpg"
import MosaicSeven from "../assets/mosaic07.jpg"
import MosaicEight from "../assets/tool_05.png"
import MosaicNine from "../assets/mosaic09.jpg"
import MosaicTen from "../assets/mosaic10.jpg"
import MosaicEleven from "../assets/tool_06.png"
import MosaicTwelve from "../assets/mosaic12.jpg"
import MosaicThirteen from "../assets/mosaic13.jpg"

const Mosaic = () => {
    return  (<div className="w-[724px] flex flex-col gap-[16px]">
    <div className="flex items-center gap-[20px] self-center">
        <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicOne} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicTwo} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicThree} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicFour} />
        </div>
    </div>
    <div className="flex items-center gap-[20px]">
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicFive} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicSix} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicSeven} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicEight} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicNine} />
        </div>
    </div>
    <div className="flex items-center gap-[20px] self-center">
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicTen} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicEleven} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicTwelve} />
        </div>
         <div className="w-[128px] h-[128px] rounded-[24px] border border-beige-light overflow-hidden">
            <img className="w-full h-full" src={MosaicThirteen} />
        </div>
    </div>
</div>)
}

export default Mosaic