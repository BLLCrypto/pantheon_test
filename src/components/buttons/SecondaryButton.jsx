
const SecondaryButton = ({text, className}) => {
    return (
    <button type="button" className={`text-gray uppercase bg-transparent border border-gray-dark focus:outline-none hover:text-gold hover:border-gold px-5 py-2.5 ${className}`}>
        {text}
    </button>)
}

export default SecondaryButton