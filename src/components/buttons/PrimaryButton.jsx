
const PrimaryButton = ({text, className}) => {
    return (
    <button 
    type="button" 
    className={`uppercase bg-beige-light border border-gold-light focus:outline-none hover:text-gold hover:border-white px-5 py-2.5 ${className}`}

    >
        {text}
    </button>)
}

export default PrimaryButton