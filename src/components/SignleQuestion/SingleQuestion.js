import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'
import 'react-toastify/dist/ReactToastify.css';

const   SingleQuestion = (singleQuestion) => {
    const [bg, setBg] = useState({ backgroundColor: 'gray' })
    const [disable, setDisable] = useState(false)
    const activeConditional = (option) => {
        console.log('authoi');
        if (option === singleQuestion.singleQuestion.correctAnswer) {
            setBg({ backgroundColor: 'green'})
            toast.success('Correct')
        }
        else {
            setBg({ backgroundColor: 'red', color: 'orange' })
            toast.error('Wrong')
        }
        setDisable(true)

    }
    console.log(singleQuestion);
    return (
        <div className='p-4 lg:border lg:border-black md:mt-14'>
             <EyeIcon onClick={() => toast(`correct answer is: ${singleQuestion.singleQuestion.correctAnswer}`)} className="lg:h-10 lg:w-10 md:w-5 md:h-5 text-blue-500" />
            <h3 className="text-2xl lg:mb-6 lg:mt-5
            ">{singleQuestion.singleQuestion.question}</h3>
            <div className='grid lg:grid-cols-2 md:grid-cols-4'>
                {singleQuestion.singleQuestion.options.map(option => <button disabled={disable} style={bg} onClick={() => activeConditional(option)} className='active:bg-black conditional text-white lg:text-2xl lg:px-5 md:text-xs md:px-4 lg:py-5 md:py-3 border mt-4 lg:m-4'>{option}</button>)}
            </div>
        <ToastContainer/>
        </div>
    );
};

export default SingleQuestion;