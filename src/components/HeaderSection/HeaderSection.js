import React from 'react';

const HeaderSection = () => {
    return (
        <div className='bg-zinc-600 mt-10 mb-10 flex items-center'>
            <div className='ml-15 text-start'>
           <div className='flex'>
           <h1 className='p-10 text-white text-5xl'>Welcome To Our Quizzes</h1><img className='w-1/5' src={require('../../images/logo.png')} alt="" />

            </div>            <h4 className='text-purple-400 px-10 py-4 text-3xl'>Take quizzes to keep your brain active</h4>
            <p className='text-white text-2xl break-words px-10 py-4'>There are 4 types of quizzes. Css 3, Javascript, React And Github. let's try it now!!!</p>
            </div>
            <div className='mr-15'>
        <img className='w-96' src={require('../../images/pngtree-man-work-with-laptop-sitting-in-chair-illustration-design-png-image_2181430-removebg-preview.png')} alt="man work with laptop sitting in chair" />
            </div>
        </div>
    );
};

export default HeaderSection;