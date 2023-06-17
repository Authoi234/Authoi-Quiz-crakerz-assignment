import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleInfo from '../SingleInfo/SingleInfo';
import HeaderSection from '../HeaderSection/HeaderSection';

const Home = () => {
    const data = useLoaderData()
    console.log(data.data);
    return (
        <div className='me-10 ms-10 text-center'>
            <header>
                <HeaderSection></HeaderSection>
            </header>
           <div className='grid grid-cols-2' id='quizs'>
           {
                data.data.map(singleInfo => <SingleInfo key={singleInfo.id} info={singleInfo}></SingleInfo>)
            }
           </div>
        </div>
    );
};

export default Home;