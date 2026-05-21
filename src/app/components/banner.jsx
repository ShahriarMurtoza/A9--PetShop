


"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black leading-tight">
                        PETHOUSE
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-8">
                        Give loving pets a second chance at happiness. Discover friendly
                        cats ready to bring warmth, comfort, and joy into your home.
                    </p>

                    <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                        Adopt Now
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* Right Side */}
                <div className="grid grid-cols-2 gap-4">

                    <div className="overflow-hidden rounded-3xl group h-[250px]">
                        <Image
                            src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop"
                            alt="Cat"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition duration-500"
                        />
                    </div>

                    <div className="overflow-hidden rounded-3xl group h-[320px] mt-10">
                        <Image
                            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop"
                            alt="Cat"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-2 transition duration-500"
                        />
                    </div>

                    <div className="overflow-hidden rounded-3xl group h-[320px] -mt-10">
                        <Image
                            src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1200&auto=format&fit=crop"
                            alt="Cat"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition duration-500"
                        />
                    </div>

                    <div className="overflow-hidden rounded-3xl group h-[250px]">
                        <Image
                            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop"
                            alt="Cat"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-2 transition duration-500"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;