import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/landing/nodexproduct/hero';
import Nodex1 from '../../components/landing/nodexproduct/nodex1';
import Nodex2 from '../../components/landing/nodexproduct/nodex2';
import Nodex3 from '../../components/landing/nodexproduct/nodex3';
import Nodex4 from '../../components/landing/nodexproduct/nodex4';
import Nodex5 from '../../components/landing/nodexproduct/nodex5';
import Nodex6 from '../../components/landing/nodexproduct/nodex6';
import Nodex7 from '../../components/landing/nodexproduct/nodex7';


const Nodex = () => (
  <>
    <Helmet>
      <title>Nodex Medantrik</title>
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
      <Nodex1 />
      <Nodex2 />
      <Nodex3 />
      <Nodex4 />
      <Nodex5 />
      <Nodex6 />
      <Nodex7 />
    </div>
  </>
);

export default Nodex;
