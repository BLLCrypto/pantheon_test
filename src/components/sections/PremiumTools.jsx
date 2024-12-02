
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from "../../assets/svg";
//slide images
import SlideOne from "../../assets/slide01.jpg"
import SlideTwo from "../../assets/slide02.jpg"
import SlideThree from "../../assets/slide03.jpg"
import SlideFour from "../../assets/slide04.jpg"

const PremiumTools = () => {

    const swiperRef = useRef(null); // Reference for Swiper instance

    const [currentIndex, setCurrentIndex] = useState(0);  // To track the current slide index
  
      // Handle slide change event
      const onSlideChange = () => {
          const index = swiperRef.current.swiper.realIndex;
          setCurrentIndex(index);
      };
  
    // Custom pagination button click handler
    const goToSlide = (index) => {
      swiperRef.current.swiper.slideTo(index);
    };
  
    const cards = [
      { image: SlideOne, title: "GPT-4o", content: "Chat with OpenAI’s most advanced AI model." },
      { image: SlideTwo, title: "Claude", content: "Generate complex discussions with ease." },
      { image: SlideThree, title: "Stable Diffusion", content: "Create breathtaking visual art." },
      { image: SlideFour, title: "ElevenLabs", content: "Turn text into studio-quality audio." },
      { image: "", title: "Card 5", content: "This is card 5" },
      { image: "", title: "Card 6", content: "This is card 6" },
    ];
  
    const goToNext = () => {
      swiperRef.current.swiper.slideNext();
    };
  
    const goToPrev = () => {
      swiperRef.current.swiper.slidePrev();
    };
  
    useEffect(() => {
      if (swiperRef.current) {
        // Ensure Swiper is initialized properly
        swiperRef.current.swiper.update();
      }
    }, []);
  

    return (  
    <section className="w-full max-w-7xl flex flex-col justify-center items-center gap-[80px]">

        <div className="w-full flex items-center justify-center">
            <h2 className="text-4xl">Premium Tools, Ready to Roll</h2>
        </div>

        <div className="w-full overflow-visible">
            <Swiper
            ref={swiperRef} // Attach reference for accessing the Swiper instance
            slidesPerView="auto"
            onSlideChange={onSlideChange}  // Track slide change
            spaceBetween={32}
            navigation={{
                prevEl: ".swiper-button-prev", // Define custom navigation buttons
                nextEl: ".swiper-button-next"
            }}
            pagination={false}
            modules={[Navigation, Pagination]}
            className="mySwiper relative leading-[140%] overflow-visible"
            >
            {cards.map((card, index) => (
                <SwiperSlide key={index} className="w-[352px] h-auto bg-beige-light flex flex-col items-center border border-gold-light">
                    <div className="w-full h-[240px] overflow-hidden">
                        <img className="w-full h-full" src={card.image} />
                    </div>
                    <div className="w-full flex flex-col p-[48px] flex-1 gap-[16px] text-start">
                        <p className="font-text text-2xl">{card.title}</p>
                        <p>{card.content}</p>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        <div className="w-full flex items-center justify-between">
            {/* Custom Pagination */}
            <div className="flex items-center gap-[8px]">
                {[1, 2, 3, 4].map( (i, index) =>  <button
                onClick={() => goToSlide(index)}
                className={`pagination-button rounded-full w-[8px] h-[8px]  ${currentIndex === index ? 'active bg-gold' : 'bg-white bg-opacity-[0.16]'}`}
                >
                </button>)}

            </div>


            <div className="flex items-center gap-[15px]">
                {/* Custom Navigation Buttons */}
                <button onClick={goToPrev} className={`group border border-gold-light p-[16px] hover:border-white disabled:opacity-40 disabled:pointer-events-none`} disabled={currentIndex === 0}>
                <ArrowLeft className="text-gold group-hover:text-white" />
                </button>
                <button onClick={goToNext} className="group border border-gold-light p-[16px] hover:border-white disabled:opacity-40 disabled:pointer-events-none" disabled={currentIndex === 3}>
                <ArrowRight className="text-gold group-hover:text-white" />
                </button>  
            </div>

        </div>
    </section>)
}

export default PremiumTools