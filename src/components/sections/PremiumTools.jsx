
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from "../../assets/svg";
import { SLIDES } from "../../config";
import { MainMaxW } from "../../config/style";

const PaginationArr = Array.from({ length: SLIDES.length - 2 }, (_, i) => i + 1);


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
    <section className={`${MainMaxW} w-full flex flex-col justify-center items-center gap-[80px]`}>

        <div className="w-full flex items-center justify-center text-center">
            <h2>Premium Tools, <br className="block md:hidden" /> Ready to Roll</h2>
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
            className="mySwiper w-full relative leading-[140%] overflow-visible"
            >
            {SLIDES.map((card, index) => (
                <SwiperSlide key={index} className="w-full sm:w-[352px] h-auto bg-beige-light flex flex-col items-center border border-gold-light">
                    <div className="w-full h-[240px] overflow-hidden">
                        <img className="w-full h-full" src={card.image} />
                    </div>
                    <div className="w-full flex flex-col p-[48px] flex-1 gap-[16px] text-start">
                        <p className="font-text text-xl xl:text-2xl">{card.title}</p>
                        <p>{card.content}</p>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        <div className="w-full flex items-center justify-between">
            {/* Custom Pagination */}
            <div className="hidden md:flex items-center gap-[8px]">
                {PaginationArr.map( (i, index) =>  <button
                onClick={() => goToSlide(index)}
                className={`pagination-button rounded-full w-[8px] h-[8px]  ${currentIndex === index ? 'active bg-gold' : 'bg-white bg-opacity-[0.16]'}`}
                >
                </button>)}

            </div>


            <div className="w-full md:w-auto flex items-center justify-between md:justify-center gap-[15px]">
                {/* Custom Navigation Buttons */}
                <button onClick={goToPrev} className={`group border border-gold-light p-[16px] hover:border-white disabled:opacity-40 disabled:pointer-events-none select-none`} disabled={currentIndex === 0}>
                <ArrowLeft className="text-gold group-hover:text-white" />
                </button>
                <div className="flex md:hidden items-center gap-[8px]">
                    {PaginationArr.map( (i, index) =>  <button
                    onClick={() => goToSlide(index)}
                    className={`pagination-button rounded-full w-[8px] h-[8px]  ${currentIndex === index ? 'active bg-gold' : 'bg-white bg-opacity-[0.16]'}`}
                    >
                    </button>)}

                </div>
                <button onClick={goToNext} className="group border border-gold-light p-[16px] hover:border-white disabled:opacity-40 disabled:pointer-events-none select-none" disabled={currentIndex === (PaginationArr.length - 1)}>
                <ArrowRight className="text-gold group-hover:text-white" />
                </button>  
            </div>

        </div>
    </section>)
}

export default PremiumTools