import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'
import 'react-toastify/dist/ReactToastify.css';

const SingleQuestion = (singleQuestion) => {
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
        <div className='p-4 border border-black'>
             <EyeIcon onClick={() => toast(`correct answer is: ${singleQuestion.singleQuestion.correctAnswer}`)} className="h-10 w-10 text-blue-500" />
            <h3 className="text-2xl mb-6 mt-5
            ">{singleQuestion.singleQuestion.question}</h3>
            <div className='grid grid-cols-2'>
                {singleQuestion.singleQuestion.options.map(option => <button disabled={disable} style={bg} onClick={() => activeConditional(option)} className='active:bg-black conditional text-white text-2xl px-5 py-5 border m-4 '>{option}</button>)}
            </div>
        <ToastContainer/>
        </div>
    );
};

export default SingleQuestion;