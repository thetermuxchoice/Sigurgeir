import React from 'react';
import Layout from '../components/Layout/Layout';
import { Landing } from '../components/LandingPage/Landing';
import { WhyUs } from '../components/WhyUs/WhyUs';
import { Slider } from '../components/Slider/Slider';

export const Home = () => {
  return (
    <>
        <Layout>
            <Landing/>
            <WhyUs/>
            <Slider/>
        </Layout>
    </>
  );
};
