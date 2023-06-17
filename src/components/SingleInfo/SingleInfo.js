import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleInfo = ({ info }) => {
    console.log(info);
    return (
        <div className='m-2'>
            <div className='p-2 bg-black flex items-center'>
                <img className='w-2/4' src={info.logo} alt="" />
                <div>
                    <h1 className='text-5xl text-white'>{info.name}</h1>
                    <h2 className='text-2xl my-5 mx-5 text-white'>Total: {info.total} Questions</h2>
                    <button className='text-2xl text-white mt-10 animate-bounce flex items-center ml-5 shadow-lg shadow-cyan-500/50 p-3'><Link to={`quizes/${info.id}`}>Start Quiz</Link>  <ArrowRightIcon className="ml-2 h-6 w-6 text-white" /></button>
                </div>
            </div>
        </div>
    );
};

export default SingleInfo;