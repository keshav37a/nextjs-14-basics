import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const links = [
    { href: '/', label: 'Home' },
    { href: '/todos', label: 'To Dos' },
    { href: '/docs', label: 'Docs' },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <header>
                    <nav>
                        <ul className='flex items-center'>
                            {links.map(({ href, label }) => (
                                <li key={label}>
                                    <Link href={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
                <div>Parent Layout</div>
                <div>{children}</div>
            </body>
        </html>
    );
}
