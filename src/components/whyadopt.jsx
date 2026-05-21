
import { Heart, Home, Smile, ShieldCheck } from "lucide-react";

const reasons = [
    {
        title: "Save a Life",
        description:
            "Adopting a pet gives homeless animals a safe and caring family.",
        icon: <Heart size={34} />,
    },
    {
        title: "True Companionship",
        description:
            "Pets provide comfort, loyalty, and emotional support every day.",
        icon: <Smile size={34} />,
    },
    {
        title: "Create a Happy Home",
        description:
            "A pet fills your home with energy, warmth, and unforgettable moments.",
        icon: <Home size={34} />,
    },
    {
        title: "Support Animal Welfare",
        description:
            "Adoption helps reduce animal abandonment and supports shelters.",
        icon: <ShieldCheck size={34} />,
    },
];

const WhyAdoptPetPage = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-14">
                <h1 className="text-5xl font-black mb-4">
                    Adopt With Love
                </h1>

                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Every adopted pet gets a second chance at life and becomes a loving
                    part of a new family.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="border rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-xl"
                    >
                        <div className="mb-5 w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                            {reason.icon}
                        </div>

                        <h2 className="text-2xl font-bold mb-3">
                            {reason.title}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 leading-7">
                            {reason.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyAdoptPetPage;

