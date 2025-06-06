import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-primary items-center flex justify-between h-[10vh] fixed top-0 z-50 px-4 shadow-md bg-white w-full">
            <h1 className="text-xl font-bold">Anesu Rirwa</h1>
            
            <div className="space-x-4">
                <Link href="/">Dashboard</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/projects">Models</Link>
                <Link href="/insights">insights</Link>
                <Link href="/connect">Connect</Link>
            </div>
        </nav>
    );
}