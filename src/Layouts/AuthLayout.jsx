import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <header className='w-10/12 mx-auto pt-2'>
                    <Navbar/>
            </header>
            <main className="flex justify-center items-center min-h-screen">
                <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayout;