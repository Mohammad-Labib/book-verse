import React from 'react';
import Link from 'next/link';
import userImage from '@/assets/user-image.jpg'
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className=' container mx-auto flex justify-between mt-2  shadow-md '>

            <div className='flex items-center'>
                <h1 className='font-bold text-2xl'>BOOK<span className='text-green-500'>VERSE</span> </h1>
            </div>

            <ul className='flex justify-between items-center gap-4 '>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/all-books"}>All Books</Link></li>
                <li><Link href={"/profile"}>My Profile</Link></li>
            </ul>

             <div className='flex items-center gap-2'>
                <h1 className='font-semibold'> I m here</h1>
            <Image src={userImage} alt="user-image" width={60} height={60}></Image>

           <button className='bg-green-500 text-white font-semibold px-4 py-2 rounded-md   h-10 flex items-center justify-center'>
            <Link href={'/login'}>Login</Link>
            </button>
        </div>

        </div>

    );
};

export default Navbar;