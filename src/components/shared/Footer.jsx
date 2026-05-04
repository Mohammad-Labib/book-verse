import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-20">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    
                 
                    <div className="col-span-1 md:col-span-1">
                        <h1 className='font-bold text-2xl mb-4'>
                            BOOK<span className='text-green-500'>VERSE</span>
                        </h1>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The joy of reading is now even easier. Find your favorite books and borrow them from our online platform today.
                        </p>
                    </div>

         
                    <div>
                        <h2 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Quick Links</h2>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li><Link href="/" className="hover:text-green-500 transition-colors">Home</Link></li>
                            <li><Link href="/all-books" className="hover:text-green-500 transition-colors">All Books</Link></li>
                            <li><Link href="/profile" className="hover:text-green-500 transition-colors">My Profile</Link></li>
                        </ul>
                    </div>

        
                    <div>
                        <h2 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Support</h2>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li><Link href="/contact" className="hover:text-green-500 transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Contact</h2>
                        <p className="text-slate-600 text-sm mb-2">contact</p>
                        <p className="text-slate-600 text-sm mb-4 italic">Spread knowledge everywhere.</p>
                        <div className="flex gap-4">
                    
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all cursor-pointer">
                                <i className="fab fa-facebook-f text-xs"></i>
                            </div>
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all cursor-pointer">
                                <i className="fab fa-twitter text-xs"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div></div>
                <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        Copyright © 2026 - All rights reserved by <span className="font-semibold">BookVerse</span>
                    </p>
                    <div className="text-slate-400 text-xs flex gap-6">
                        <span>Developed for Academic Project</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;