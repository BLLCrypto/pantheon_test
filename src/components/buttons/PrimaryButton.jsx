
const PrimaryButton = ({text, className}) => {
    return (
    <button 
        type="button" 
        className={`max-w-max text-sm uppercase tracking-[2px] bg-beige-light border border-gold-light focus:outline-none hover:text-gold hover:opacity-90 px-[24px] py-[12px] ${className}`}
    >
        {text}
    </button>)
}

export default PrimaryButton