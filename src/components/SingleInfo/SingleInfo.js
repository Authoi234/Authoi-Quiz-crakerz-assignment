import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleInfo = ({ info }) => {
    console.log(info);
    return (
        <div className='m-2'>
            <div className='p-2 bg-black lg:flex md:flex lg:items-center md:items-center md:text-center max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl sm:block'>
                <img className='w-2/4' src={info.logo} alt="" />
                <div>
                    <h1 className='lg:text-5xl text-white'>{info.name}</h1>
                    <h2 className='text-2xl my-5 mx-5 text-white '>Total: {info.total} Questions</h2>
                    <button className='break-all lg:text-2xl text-white mt-10 animate-bounce flex items-center lg:ml-5 md:ml-4 shadow-xl shadow-cyan-400 border-white lg:p-3'><Link className='shadow-lg shadow-cyan-200 text-white decoration-transparent' to={`quizes/${info.id}`}>Start Quiz</Link>  <ArrowRightIcon className="ml-2 h-6 w-6 text-white" /></button>
                </div>
            </div>
        </div>
    );
};

export default SingleInfo;