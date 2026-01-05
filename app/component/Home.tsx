"use client";
import Image from 'next/image';

export default function HomeComponent() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
            {/* Section Title */}
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">Welcome — Home</h1>
                <p className="text-gray-300 text-lg">
                    This is the Home page. Use the navigation to visit About and Experience.
                </p>
            </div>

            {/* First Grid */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                    <Image
                        src="/image/image3.jpg"
                        alt="Frontend illustration"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Frontend Development</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering.
                        My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built
                        for performance and usability.
                    </p>
                </div>
            </div>

            {/* Second Grid */}
            <div className="grid md:grid-cols-2 gap-8 items-start mt-5">
                <div className="order-2 md:order-1">
                    <h2 className="text-2xl font-semibold text-white mb-4">Current Role</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Currently, I'm a Junior Front-End Engineer at Kenbox, specializing in accessibility. I contribute to the creation and maintenance of UI components that
                        power Kenbox’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <Image
                        src="/image/image4.jpg"
                        alt="Frontend illustration"
                        width={550}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>

    );
}
