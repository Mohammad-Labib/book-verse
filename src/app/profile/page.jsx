'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import userImage from '@/assets/user-image.jpg'
import React from 'react';


const profilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;


    console.log(user);
    return (
       <div className="flex justify-center items-center p-6">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
   
    <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-center">
      <h1 className="text-white text-2xl font-bold tracking-tight">Profile Page</h1>
      <p className="text-green-50 opacity-90 text-sm mt-1">Manage your account information</p>
    </div>


   
    <div className="p-8 space-y-6">
      <div className="flex flex-col items-center gap-4">
       
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl border-4 border-white shadow-sm">
         
        </div>
           <Image src={userImage} alt="user-image" width={130} height={130} className="rounded-full" />
        <div className="text-center">
           
          <h2 className="text-xl font-bold text-gray-800">Update My Profile</h2>
          <p className="text-gray-500 text-sm italic">Edit your personal details below</p>
        </div>
      </div>


     
      <div className="space-y-3 pt-2">
        <div className="flex justify-between items-center p-3  rounded-xl  transition-colors">
          <span className="text-gray-400 text-xs font-black uppercase tracking-widest">Username</span>
          <span className="text-gray-700 font-bold">Mohammad Labib</span>
       
        </div>
       
        <div className="flex justify-between items-center p-3 rounded-xl  transition-colors">
          <span className="text-gray-400 text-xs font-black uppercase tracking-widest">Status</span>
          <span className="text-green-600 font-bold text-xs bg-green-100 px-2 py-1 rounded-full uppercase">Active</span>
        </div>
      </div>


     
      <button className="w-full bg-amber-400  text-gray-800 font-bold p-2 py-3 rounded-xl transition-all shadow-md active:scale-95">
        Edit Profile
      </button>
    </div>
  </div>
</div>
    );
};


export default profilePage;

