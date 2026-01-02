'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `px-4 py-2 rounded-md transition ${pathname === path
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-200'
        }`;

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-xl font-bold">My Portfolio</h1>

                <div className="flex gap-4">
                    <Link href="/" className={linkClass('/')}>Home</Link>
                    <Link href="/about" className={linkClass('/about')}>About</Link>
                    <Link href="/experience" className={linkClass('/experience')}>
                        Experience
                    </Link>
                </div>
            </nav>
        </header>
    );
}
