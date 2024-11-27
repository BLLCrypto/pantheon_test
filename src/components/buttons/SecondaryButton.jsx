
const SecondaryButton = ({text, className}) => {
    return (
    <button type="button" className={`max-w-max text-sm uppercase tracking-[2px] bg-transparent border border-gray-dark focus:outline-none hover:text-gold hover:border-gold px-5 py-2.5 ${className}`}>
        {text}
    </button>)
}

export default SecondaryButton