
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
    <section className={`relative ${MainMaxW} w-full flex flex-col justify-center items-center gap-[40px] md:gap-[80px]`}>

        <div 
            className="w-[1440px] h-[720px] absolute left-[-160px] bottom-[-140px] rounded-full opacity-80 z-0"
            style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                filter: 'blur(150px)',
            }}
        ></div>

        <div className="w-full flex items-center justify-center text-center">
            <h2>Premium Tools, <br className="block md:hidden" /> Ready to Roll</h2>
        </div>

        <div className="w-full overflow-visible z-10">
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
            {SLIDES.map((slide, index) => (
                <SwiperSlide key={index} className="w-full sm:w-[352px] h-auto bg-beige-light flex flex-col items-center border border-gold-light">
                    <div className="w-full h-[240px] overflow-hidden relative">
                        <img className="w-full h-full" src={slide.image} />
                        <div className="w-[64px] h-[64px] absolute top-[48px] left-[48px] z-10 rounded-[12.8px] overflow-hidden border border-beige-light">
                            <img className="w-full h-full" src={slide.logo} />
                        </div>
                    </div>
                    <div className="relative overflow-hidden w-full flex flex-col p-[48px] flex-1 gap-[16px] text-start">
                        <div 
                            className="w-[434px] h-[434px] absolute left-[-41px] bottom-[-197px] rounded-full opacity-80"
                            style={{
                                background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                                filter: 'blur(50px)',
                            }}
                        ></div>
                        <p className="font-text text-xl xl:text-2xl">{slide.title}</p>
                        <p>{slide.content}</p>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        <div className="w-full flex items-center justify-between z-10">
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