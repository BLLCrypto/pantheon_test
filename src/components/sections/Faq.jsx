import { useState } from "react"
import { Close, Plus } from "../../assets/svg"
import PrimaryButton from "../buttons/PrimaryButton"

const FAQ_ITEMS =   [
    {
      question: "How does the credit system work?",
      answer:
        "Our flexible credit system allows you to buy credits in advance, which are then used only when you access tools or services. Use what you need, when you need it—no wasted subscriptions or overpaying for unused features.",
    },
    {
      question: "What tools are currently available?",
      answer:
        "Our flexible credit system allows you to buy credits in advance, which are then used only when you access tools or services. Use what you need, when you need it—no wasted subscriptions or overpaying for unused features.",
    },
    {
      question: "When will partner integrations be available?",
      answer:
        "Our flexible credit system allows you to buy credits in advance, which are then used only when you access tools or services. Use what you need, when you need it—no wasted subscriptions or overpaying for unused features.",
    },
    {
      question: "Is my account secure?",
      answer:
        "Our flexible credit system allows you to buy credits in advance, which are then used only when you access tools or services. Use what you need, when you need it—no wasted subscriptions or overpaying for unused features.",
    },
  ]


const Divider = ({show = true}) => {
    return <div className={`w-full h-[1px] bg-white ${show ? "bg-opacity-[0.16]" : "bg-opacity-0" }`}></div>
}


const FAQ = () => {
    const [activeAccordion, setActiveAccordion] = useState(-1);

    const toggleAccordion = (index) => {
      setActiveAccordion(activeAccordion === index ? -1 : index);
    };
    return (
        <section className="w-full max-w-7xl flex flex-col justify-center items-center gap-[60px]">
          <div className="w-full flex items-center justify-center text-center leading-[110%] ">
              <h2 className="text-4xl">Got Questions? <br/>We’ve Got Answers.</h2>
          </div>

          <div className="accordion-group max-w-[736px] leading-[160%]">
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
                    className={`text-sm tracking-[2px] uppercase ${
                      activeAccordion === index && "text-gold"
                    }`}
                  >
                    {item.question}
                  </p>
                  {activeAccordion === index ? <Close className="w-[24px] h-[24px]" /> : <Plus className="w-[24px] h-[24px]" />}
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