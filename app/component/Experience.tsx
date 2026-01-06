"use client";

export default function ExperienceComponent() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold text-white">
                    Kenbox Technology Pvt. Ltd
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                    Feb 2024 – Present
                </p>

                <div className="mt-4 space-y-4 text-gray-300">
                    <div>
                        <h3 className="text-lg font-medium text-white">
                            Junior Software Engineer
                        </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Working on modern web and mobile applications using React.js, React Native, and Next.js</li>
                            <li>Developing and maintaining features for Android and iOS platforms</li>
                            <li>Collaborating with team members to deliver high-quality solutions</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-white">
                            Trainee
                        </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Learned frontend development best practices</li>
                            <li>Worked on real-time projects under senior developer guidance</li>
                            <li>Gained hands-on experience in React and mobile app development</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-8 mt-12">Skills</h1>

            <div className="flex flex-wrap gap-3">
                {[
                    "Next.js",
                    "React.js",
                    "React Native",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "CSS",
                    "HTML5",
                    "MUI",
                    "Ionic",
                    "Git",
                    "GitHub",
                    "MySQL",
                ].map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-gray-800 text-gray-200 text-sm font-medium border border-gray-700 hover:bg-gray-700 transition"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>

    );
}
