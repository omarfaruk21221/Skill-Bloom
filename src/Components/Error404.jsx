import React from 'react';
import ErrorImg from"../assets/ErrorImg.jpg"

const Error404 = () => {
    return (
        <div className='text-center min-h-screen flex flex-1 justify-center items-center'>
         <div>
            <h1 className="text-5xl text-secondary font-bold text-center">404</h1>
            <h3 className="text-3xl text-primary font-semibold text-center">Page Not Found</h3>
               <img className='w-6/12 mx-auto' src={ErrorImg} alt="" />
         </div>

        </div>
    );
};

export default Error404;