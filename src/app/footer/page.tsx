'use client';
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer style={{ padding: '1rem', backgroundColor: '#f1f1f1', textAlign: 'center' }}>
            <p style={{ color: 'black' }}>&copy; {new Date().getFullYear()} Musiiconvert. All rights reserved. Version 1.0</p>
            <Link href="/technology">
                <button className="text-blue-500 hover:text-blue-700">
                    Technologies Used
                </button>
            </Link>
        </footer>
    );
};

export default Footer;