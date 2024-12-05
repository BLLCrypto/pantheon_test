import { useState } from "react"
import { Close, Plus } from "../../assets/svg"
import PrimaryButton from "../buttons/PrimaryButton"
import { FAQ_ITEMS } from "../../config"
import { MainMaxW } from "../../config/style"


const Divider = ({show = true}) => {
    return <div className={`w-full h-[1px] bg-white ${show ? "bg-opacity-[0.16]" : "bg-opacity-0" }`}></div>
}


const FAQ = () => {
    const [activeAccordion, setActiveAccordion] = useState(-1);

    const toggleAccordion = (index) => {
      setActiveAccordion(activeAccordion === index ? -1 : index);
    };
    return (
        <section className={`relative ${MainMaxW} w-full flex flex-col justify-center items-center gap-[40px] md:gap-[60px]`}>

            <div 
                className="w-[2038px] h-[1019px] absolute left-[-459px] bottom-[-540px] rounded-full opacity-80 z-0"
                style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(244, 236, 181, 0.10) 0%, rgba(158, 141, 89, 0.10) 50%, rgba(84, 31, 216, 0.10) 100%)',
                    filter: 'blur(150px)',
                }}
            ></div>

          <div className="w-full flex items-center justify-center text-center leading-[110%] z-10">
              <h2>Got Questions? <br/>We’ve Got Answers.</h2>
          </div>

          <div className="accordion-group max-w-[736px] leading-[160%] z-10">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`accordion w-full flex flex-col ${
                  activeAccordion === index ? "active" : ""
                }`}
              >
                <Divider show={index === 0 || (activeAccordion + 1) === index ? false : true} />
                <button
                  className={`accordion-toggle group inline-flex items-center justify-between w-full py-[20px] transition duration-500 ${
                    activeAccordion === index ? "" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <p
                    className={`text-sm tracking-[2px] uppercase text-left ${
                      activeAccordion === index && "text-gold"
                    }`}
                  >
                    {item.question}
                  </p>
                  {activeAccordion === index ? <Close className="w-[24px] h-[24px] text-gold" /> : <Plus className="w-[24px] h-[24px]" />}
                </button>
                <div
                  className={`accordion-content w-full overflow-hidden transition-[height] duration-300 ease-in-out`}
                  style={{
                    height: activeAccordion === index
                      ? `${document.getElementById(`content-${index}`)?.scrollHeight}px`
                      : "0",
                  }}
                  id={`content-${index}`}
                >
                  <p
                    className="text-sm tracking-[2px] uppercase"
                    style={{
                      border: "1px solid rgba(239, 222, 138, 0.60)",
                      padding: "32px",
                      marginBottom: "32px",
                      backgroundColor: "rgba(244, 236, 181, 0.04)",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>


          <PrimaryButton text="View All FAQs" />

    </section>
    )
}
export default FAQ