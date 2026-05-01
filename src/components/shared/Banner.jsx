import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div className="bg-white">
         
      
            <section className="relative mt-8 "> 
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Find Your <span className="text-green-500">Next Read</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Explore thousands of books across various genres. Borrow your favorites and start your reading journey with BookVerse today.
                    </p>
                    <Link href="/all-books">
                        <button className="bg-green-500 text-white font-semibold py-4 px-12 rounded-full shadow-xl  ">
                            Browse Now
                        </button>
                    </Link>
                </div>
               
            </section>

        </div>
    );
};

export default HomePage;