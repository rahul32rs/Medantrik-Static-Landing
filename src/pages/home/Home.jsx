import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/landing/home/hero';
import Home2 from '../../components/landing/home/home2';
import Home3 from '../../components/landing/home/home3';
import Home4 from '../../components/landing/home/home4';
import Home5 from '../../components/landing/home/home5';
import Home6 from '../../components/landing/home/home6';
import Home10 from '../../components/landing/home/home10';
import Home11 from '../../components/landing/home/home11';


const Home = () => (
  <>
    <Helmet>
      <title>Medantrik Medtech | 24/7 Smart Answering</title>
      <meta
        name="description"
        content="Get 24/7 Medantrik Medtech. Never miss a call again with smart, professional virtual assistants tailored for your business."
      />
      <meta
        name="keywords"
        content="General AI Services, AI solutions company, Artificial intelligence services, AI consulting services, Industry-Specific AI Solutions, AI solutions for healthcare, AI in the finance industry, AI for retail businesses, AI Development and Integration, custom AI development, AI integration services, machine learning development company, AI Support and Maintenance, AI system support, AI maintenance services, AI troubleshooting assistance, Location-Based Keywords, AI solutions in Australia, Sydney AI services, Melbourne AI consulting"
      />
      <link rel="canonical" href="https://medantrik.com/" />
    </Helmet>

    <div className="overflow-x-hidden">
      <Hero />
      <Home3 />
      <Home5 />
      <Home11 />
      <Home4 />
      <Home6 />
      <Home10 />
      <Home2 />
    </div>
  </>
);

export default Home;
