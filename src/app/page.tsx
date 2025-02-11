'use client';
import React from 'react';
import Link from 'next/link';

const StartPage: React.FC = () => {


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-8xl font-bold mb-8">Welcome to MusiiConvert</h1>
            <p className="text-lg text-center ">Convert your .mp3 files into Sheet Music with ease</p>
            <p className="text-lg text-center mb-6">Get started by adding a song</p>
            <Link href="/addsong">
            <button 
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Get Started
            </button>
            </Link>
        </div>
    );
};

export default StartPage;