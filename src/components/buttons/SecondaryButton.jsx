
const SecondaryButton = ({text, className, icon}) => {
    return (
    <button type="button" className={`flex items-center gap-[12px] max-w-max text-sm text-white-dark uppercase tracking-[2px] bg-transparent border border-white-extra-dark focus:outline-none hover:text-gold hover:opacity-90 px-[24px] py-[12px] ${className}`}>
        {icon}
        {text}
    </button>)
}

export default SecondaryButton