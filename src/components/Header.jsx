const Header = ({ isActive, setIsActive }) => {
    return (
        <div className="flex flex-col items-center justify-center pt-12 pb-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-[#0c1222] mb-4">
                    Premium Digital Tools
                </h1>
                <p className="text-gray-500 max-w-lg mx-auto">
                    Choose from our curated collection of premium digital products.
                </p>
            </div>

            <div className="inline-flex p-1 bg-white border border-gray-100 rounded-full shadow-sm">
                {/* Products Button */}
                <button
                    onClick={() => setIsActive("products")}
                    className={`px-10 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                        isActive === "products"
                            ? "bg-gradient-to-r from-[#7032ff] to-[#a341ff] text-white shadow-lg" // সিলেক্টেড থাকলে এই স্টাইল
                            : "text-gray-600 hover:bg-gray-50" // সিলেক্টেড না থাকলে এই স্টাইল
                    }`}
                >
                    Products
                </button>

                {/* Cart Button */}
                <button
                    onClick={() => setIsActive("cart")}
                    className={`px-10 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                        isActive === "cart"
                            ? "bg-gradient-to-r from-[#7032ff] to-[#a341ff] text-white shadow-lg"
                            : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                    Cart (0)
                </button>
            </div>
        </div>
    );
};
export default Header;