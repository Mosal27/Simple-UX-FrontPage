import React from 'react';
import Laptop from '../assets/laptop.jpg';


function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center items-center text-justify'>
                    <p className='uppercase text-[#00df9a] font-bold tracking-widest'>Data Analysis Dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your data</h1>
                    <p className='md:text-lg sm:text-sm text-w-auto '>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit earum praesentium quibusdam illo corporis beatae a excepturi. Laboriosam corrupti maxime iste necessitatibus inventore eligendi sunt exercitationem, dicta nulla, temporibus laudantium.
                    </p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 px-6 py-3 text-[#00df9a]'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
