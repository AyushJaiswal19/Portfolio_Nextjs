"use client";

import Image from "next/image";

export default function AboutComponent() {
    return (
        <section className="mx-auto px-6 py-12 max-w-7xl">
            <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
            <p className="text-xl text-gray-300 mb-8">
                Hi, I’m a Software Engineer with 2 years of experience, currently working at Kenbox Technology. I specialize in building modern, responsive, and high-quality applications using React.js, React Native, and Next.js.
            </p>
            <p className="text-xl text-gray-300 mb-8">
                I have developed and worked on several websites and mobile applications for Android and iOS, focusing on performance, usability, and clean UI design. I enjoy transforming ideas into real-world digital products that deliver great user experiences.
            </p>
            <p className="text-xl text-gray-300 mb-8">
                I completed my BCA and MCA from Invertis University, Bareilly, where I developed a strong interest in frontend technologies and application development.
            </p>
            <p className="text-xl text-gray-300 mb-8">
                I am always eager to learn new tools, improve my skills, and take on challenging projects that help me grow as a developer.
            </p>

            <div className="grid grid-cols-3 gap-4">
                <div className="...">
                    <div className="w-full">
                        <Image
                            src="/image/image10.jpg"
                            alt="Frontend illustration"
                            width={450}
                            height={400}
                            className=" rounded-lg shadow-lg"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
                <div className="...">
                    <div className="w-full">
                        <Image
                            src="/image/image7.jpg"
                            alt="Frontend illustration"
                            width={450}
                            height={300}
                            className=" rounded-lg shadow-lg"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
                <div className="...">
                    <div className="w-full">
                        <Image
                            src="/image/image11.jpg"
                            alt="Frontend illustration"
                            width={450}
                            height={300}
                            className=" rounded-lg shadow-lg"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
