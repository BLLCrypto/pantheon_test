
const SecondaryButton = ({buttonRef,onClick, text, className, icon}) => {
    return (
    <button ref={buttonRef} type="button" onClick={onClick} className={`z-10 w-full sm:max-w-[70%] md:max-w-max flex items-center justify-center gap-[12px] text-0xs md:text-sm text-white-dark uppercase tracking-[2px] bg-transparent border border-white-extra-dark focus:outline-none hover:text-gold hover:opacity-90 px-[24px] py-[12px] ${className}`}>
        {icon}
        {text}
    </button>)
}

export default SecondaryButton