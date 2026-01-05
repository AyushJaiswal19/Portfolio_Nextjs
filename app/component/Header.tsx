'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `px-4 py-2 rounded-md transition-colors duration-200 ${pathname === path
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:bg-neutral-800 hover:text-white'
        }`;

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#1f2a4f] text-white border-b border-neutral-800">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo / Title */}
                <h1 className="text-xl font-bold text-white">My Portfolio</h1>

                {/* Navigation + Resume Button */}
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <Link href="/" className={linkClass('/')}>Home</Link>
                        <Link href="/about" className={linkClass('/about')}>About</Link>
                        <Link href="/experience" className={linkClass('/experience')}>Experience</Link>
                    </div>

                    {/* Resume Button */}

                    <button
                        className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500
             text-white font-semibold rounded-lg shadow-lg
             flex items-center gap-2
             transform transition-transform duration-200 hover:scale-105"
                    >
                        <ArrowDownTrayIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                        Resume
                    </button>
                </div>
            </nav>
        </header>
    );
}
