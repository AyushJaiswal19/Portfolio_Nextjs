"use client";
import { EnvelopeIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function HomeComponent() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
            {/* Section Title */}
            <div>
                <h1 className="text-5xl font-bold text-white mb-4">Ayush Jaiswal</h1>
                <p className="text-gray-300 text-3xl"> Software Engineer </p>
            </div>


            {/* Social Media Section */}
            <div className="flex items-center gap-6">

                {/* GitHub */}
                <div className="relative group">
                    <a
                        href="https://github.com/AyushJaiswal19"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2
                     whitespace-nowrap rounded bg-black px-2 py-1
                     text-xs text-white opacity-0
                     transition-opacity duration-200
                     group-hover:opacity-100">
                        GitHub
                    </span>
                </div>

                {/* LinkedIn */}
                <div className="relative group">
                    <a
                        href="https://linkedin.com/in/ayush-jaiswal19"
                        target="_blank"
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                        <FaLinkedinIn className="w-6 h-6" />
                    </a>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2
                     whitespace-nowrap rounded bg-black px-2 py-1
                     text-xs text-white opacity-0
                     transition-opacity duration-200
                     group-hover:opacity-100">
                        LinkedIn
                    </span>
                </div>

                {/* Gmail */}
                <div className="relative group">
                    <a
                        href="mailto:ayushjaiswal562@gmail.com"
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                    >
                        <EnvelopeIcon className="w-6 h-6" />
                    </a>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2
                     whitespace-nowrap rounded bg-black px-2 py-1
                     text-xs text-white opacity-0
                     transition-opacity duration-200
                     group-hover:opacity-100">
                        Gmail
                    </span>
                </div>

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
                        Currently, I'm a Junior Software Engineer at <b>Kenbox Technology Pvt Ltd.</b> , specializing in accessibility. I contribute to the creation and maintenance of UI components that
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
