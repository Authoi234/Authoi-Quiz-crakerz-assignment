import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SignleQuestion/SingleQuestion';

const SingleQuiz = () => {
    const quizData = useLoaderData();
    console.log(quizData);
    const bg = {
        backgroundColor: 'white',
    }
    return (
        <div className=''>
            <div className='flex justify-center items-center' style={bg}>
                <img className='lg:w-48 md:w-24 sm:w-12' src={quizData.data.logo} alt="" />
            </div>
            <div><h1 className="text-4xl">{quizData.data.name === 'Git' ? bg.backgroundColor= 'black' : bg.backgroundColor= 'white'} {quizData.data.name}</h1>
                <h4 className="text-3xl">total quiz: {quizData.data.total}</h4>
                <hr className='mt-3 mb-3 text-black' />
            </div>
            <div className='px-24 py-5'>
                {
                    quizData.data.questions.map(question => <SingleQuestion singleQuestion={question} key={question.id}></SingleQuestion>)
                }
            </div>
            <div>
                <footer>
                    <h1 className='my-5 text-2xl'>How did you like our quiz?</h1>
                    <input type="checkbox" name="" id="" />
                </footer>
            </div>
        </div>
    );
};

export default SingleQuiz;