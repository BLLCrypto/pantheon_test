
const SwitchPage = () => {
    return (
        <label className="flex items-center cursor-pointer gap-3 xl:gap-6">
            <span className="hidden lg:block text-gray uppercase hover:text-gold">For Users</span>
            {/* Text for smaller screens */}
            <span className="block lg:hidden text-gray uppercase hover:text-gold">
                Users
            </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-14 h-8 bg-transparent border border-gray-dark peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gold rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gold after:content-[''] after:absolute after:top-[5px] after:start-[7px] after:bg-gold after:border-gray-dark after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="hidden lg:block text-gray hover:text-gold uppercase">For Partners</span>
            {/* Text for smaller screens */}
            <span className="block lg:hidden text-gray uppercase hover:text-gold">
              Partners
            </span>
        </label>
    )
}

export default SwitchPage