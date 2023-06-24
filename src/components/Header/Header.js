import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className='bg-red-300 flex justify-around items-center py-3 shadow-lg light-shadow'>
                <div className='text-3xl flex items-center text-white'>
                    <img className='w-16' src={'../../images/logo.png'} alt="" />
                    <h1 className='ps-3'>Authoi Quiz</h1>
                </div>
                <div className='flex'>
                    <NavLink to='/' className={({ isActive}) => isActive ? "text-zinc-200 scale-110 decoration-transparent" : "text-white decoration-transparent"}><li className='text-2xl list-none pe-4'>Home</li></NavLink>
                    <NavLink to='statistics' className={({ isActive}) => isActive ? "text-zinc-200 scale-110 decoration-transparent" : "text-white decoration-transparent"}><li className='text-2xl list-none pe-4'>Statistics</li></NavLink>
                    <NavLink to='blogs' className={({ isActive}) => isActive ? "text-zinc-200 scale-110 decoration-transparent" : "text-white decoration-transparent"}><li className='text-2xl list-none pe-4'>Blog</li></NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;