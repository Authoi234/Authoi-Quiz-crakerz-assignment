import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className='bg-red-300 flex justify-around items-center py-3 shadow-lg light-shadow'>
                <div className='text-3xl flex items-center text-white'>
                    <img className='w-16' src={require('../../images/logo.png')} alt="" />
                    <h1 className='ps-3'>Authoi Quiz</h1>
                </div>
                <div className='flex'>
                    <a href='/#quizs' className='text-white'><li className='text-2xl list-none pe-4'>Quizzes</li></a>
                    <Link go='/' className='text-white'><li className='text-2xl list-none pe-4'>Home</li></Link>
                    <a href='statistics' className='text-white'><li className='text-2xl list-none pe-4'>Statistics</li></a>
                    <Link go='blogs' className='text-white'><li className='text-2xl list-none pe-4'>Blog</li></Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;