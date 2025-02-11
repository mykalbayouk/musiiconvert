import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-900 text-white">
            <Link href="/" passHref>
                <div className="cursor-pointer flex items-center space-x-2 ml-4">
                    <img src="resources/icon.svg" alt="Logo" className="h-16 w-16" />
                </div>
            </Link>
            <Link href="/" passHref>
                <button className="bg-gray-600 text-xl text-white border-none px-4 py-2 cursor-pointer rounded mr-4">
                    Home
                </button>
            </Link>
        </nav>
    );
};

export default Navbar;
