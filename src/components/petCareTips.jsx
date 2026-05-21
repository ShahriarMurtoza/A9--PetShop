
"use client";

import { motion } from "framer-motion";
import {
    HeartPulse,
    Bone,
    Bath,
    Activity,
    Stethoscope,
    Sun,
} from "lucide-react";

const tips = [
    {
        title: "Healthy Food",
        description:
            "Provide balanced meals and clean water to keep pets active and healthy.",
        icon: <Bone size={32} />,
    },
    {
        title: "Regular Exercise",
        description:
            "Daily walks and playtime help pets stay physically and mentally fit.",
        icon: <Activity size={32} />,
    },
    {
        title: "Routine Checkups",
        description:
            "Visit veterinarians regularly for vaccines and health monitoring.",
        icon: <Stethoscope size={32} />,
    },
    {
        title: "Clean Environment",
        description:
            "Keep sleeping areas, toys, and feeding bowls neat and hygienic.",
        icon: <Bath size={32} />,
    },
    {
        title: "Give Affection",
        description:
            "Love, attention, and patience help pets feel safe and comfortable.",
        icon: <HeartPulse size={32} />,
    },
    {
        title: "Outdoor Time",
        description:
            "Fresh air and sunlight improve mood and support overall well-being.",
        icon: <Sun size={32} />,
    },
];

const PetCareTipsPage = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-14">
                <h1 className="text-5xl font-black mb-4">
                    Pet Care Tips
                </h1>

                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Caring for pets with patience and responsibility helps them live a
                    happy and healthy life.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-5">
                            {tip.icon}
                        </div>

                        <h2 className="text-2xl font-bold mb-3">
                            {tip.title}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 leading-7">
                            {tip.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PetCareTipsPage;