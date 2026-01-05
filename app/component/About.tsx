"use client";

import Image from "next/image";

export default function AboutComponent() {
    return (
        <section className="mx-auto px-6 py-12 max-w-7xl">
            <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
            <p className="text-gray-300 mb-8">
                This is the About page. Add your bio, skills, and background here.
            </p>

            {/* Full width image with proper quality */}
            <div className="w-full">
                <Image
                    src="/image/image5.jpg"
                    alt="Frontend illustration"
                    width={700}
                    height={400}
                    className=" h-auto rounded-lg shadow-lg"
                    quality={100}
                    priority    
                />
                
            </div>
        </section>
    );
}
