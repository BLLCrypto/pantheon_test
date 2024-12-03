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
import MosaicEleven from "../assets/tool_03.png"
import MosaicTwelve from "../assets/mosaic12.jpg"
import MosaicThirteen from "../assets/mosaic13.jpg"

const SingleMosaic = ({image}) => {
    return (  <div className="w-[64px] h-[64px] md:w-[128px] md:h-[128px] rounded-[12px] md:rounded-[24px] border border-beige-light overflow-hidden">
        <img className="w-full h-full" src={image} />
    </div>)
}

const Mosaic = () => {
    return  (<div className="w-full md:w-[724px] flex flex-col gap-[16px]">
    <div className="flex items-center gap-[10px] md:gap-[20px] self-center">
        <SingleMosaic image={MosaicOne} />
        <SingleMosaic image={MosaicTwo} />
        <SingleMosaic image={MosaicThree} />
        <SingleMosaic image={MosaicFour} />
    </div>
    <div className="flex items-center gap-[10px] md:gap-[20px] self-center md:self-auto">
        <SingleMosaic image={MosaicFive} />
        <SingleMosaic image={MosaicSix} />
        <SingleMosaic image={MosaicSeven} />
        <SingleMosaic image={MosaicEight} />
        <SingleMosaic image={MosaicNine} />
    </div>
    <div className="flex items-center gap-[10px] md:gap-[20px] self-center">
        <SingleMosaic image={MosaicTen} />
        <SingleMosaic image={MosaicEleven} />
        <SingleMosaic image={MosaicTwelve} />
        <SingleMosaic image={MosaicThirteen} />
    </div>
</div>)
}

export default Mosaic