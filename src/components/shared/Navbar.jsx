'use client'
import React from 'react';
import Link from 'next/link';
import userImage from '@/assets/user-image.jpg'
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation'; 

const Navbar = () => {
    const router = useRouter();
    const userData = authClient.useSession();
    const user = userData.data?.user;

    
    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); 
                },
            },
        });
    };

    return (
        <div className='container mx-auto flex justify-between mt-2 shadow-md p-2'>

            <div className='flex items-center'>
                <h1 className='font-bold text-2xl'>BOOK<span className='text-green-500'>VERSE</span> </h1>
            </div>

            <ul className='flex justify-between items-center gap-4 '>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/all-books"}>All Books</Link></li>
                <li><Link href={"/profile"}>My Profile</Link></li>
            </ul>

            <div className="flex items-center gap-4">
                {!user ? (
               
                    <div className='flex items-center gap-2'>
                        <h1 className='font-semibold text-sm'> I am here</h1>
                        <Image src={userImage} alt="user-image" width={40} height={40} className="rounded-full" />
                        <Link href={'/login'} className='bg-green-500 text-white font-semibold px-4 py-2 rounded-md h-10 flex items-center justify-center'>
                            Login
                        </Link>
                    </div>
                ) : (
                    
                    <div className="flex items-center gap-3">
                        {/* User-er real image thakle seta dekhabe, na thakle default image */}
                        <Image 
                            src={user.image || userImage} 
                            alt="user-image" 
                            width={40} 
                            height={40} 
                            className="rounded-full border"
                        />
                        <Button 
                            color="danger" 
                            variant="flat" 
                            onPress={handleLogout}
                        >
                            LogOut
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;