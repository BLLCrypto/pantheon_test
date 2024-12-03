
const PrimaryButton = ({text, className}) => {
    return (
    <button 
        type="button" 
        className={`w-full sm:max-w-[70%] md:max-w-max flex items-center justify-center text-0xs md:text-sm uppercase tracking-[2px] bg-beige-light border border-gold-light focus:outline-none hover:text-gold hover:opacity-90 px-[24px] py-[12px] ${className}`}
    >
        {text}
    </button>)
}

export default PrimaryButton