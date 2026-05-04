'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const profilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    console.log(user);
    return (
        <div>
            <h1>profile Page:</h1>
        </div>
    );
};

export default profilePage;