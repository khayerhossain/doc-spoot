import React from 'react';
import Hero from '../../Pages/Hero/Hero';
import { useLoaderData } from 'react-router';
import CardContainer from '../../Pages/CardContainer/CardContainer';
import CountingBox from '../../Pages/CountingBoxes/CountingBox';

const Home = () => {
    const doctorsData=useLoaderData();
    // console.log(doctorsData)
    return (
        <div>
            <Hero></Hero>
            <CardContainer  doctorsData={ doctorsData}></CardContainer>
            <CountingBox></CountingBox>
        </div>
    );
};

export default Home;