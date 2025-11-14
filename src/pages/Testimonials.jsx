import { Star } from "lucide-react";

export default function Testimonials() {
    return (
    <section className="py-20 bg-[#0B1A3A] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Label */}
        <p className="text-[17px] font-md text-gray-300 tracking-wide mb-2">
            <span className="mr-1 text-indigo-600">//</span>Testimonials
        </p>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-14">
            Testimonials: <span className="text-blue-500">Trusted by Our Clients</span>
        </h2>

        {/* Testimonials Cards */}
        <div className="grid sm:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-[#14224A] p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                    ))}
                    <span className="text-white ml-2 text-sm font-medium">5.0</span>
                </div>

                <h3 className="text-xl text-left font-semibold mb-3">A Wonderful Experience!</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Working with BothEnds Development was smooth from start to finish.
                    They took the time to understand exactly what my business needed and
                    delivered a website that feels modern, fast, and beautifully crafted.
                    Communication was excellent and the final result exceeded my expectations.
                </p>

                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <p className="font-medium text-white">Jenny Wilson</p>
                        <p className="text-sm text-gray-400">Owner, Furniture Store</p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#14224A] p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                    ))}
                    <span className="text-white ml-2 text-sm font-medium">5.0</span>
                </div>

                <h3 className="text-xl text-left font-semibold mb-3">Highly Recommended!</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    I’m extremely impressed with the attention to detail and professionalism.
                    The team transformed my idea into a full platform that my customers love.
                    Everything was delivered on time and the performance is flawless. I couldn’t
                    recommend them more.
                </p>

                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                    <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <p className="font-medium text-white">Drip Coat</p>
                        <p className="text-sm text-gray-400">Car Wrap Booking App</p>
                    </div>
                </div>
            </div>

        </div>

        {/* Slider Dots */}
        <div className="flex justify-center mt-10 gap-2">
            <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
            <span className="w-8 h-1 bg-white/20 rounded-full"></span>
            <span className="w-8 h-1 bg-white/20 rounded-full"></span>
            <span className="w-8 h-1 bg-white/20 rounded-full"></span>
        </div>

        </div>
    </section>
    );
}
