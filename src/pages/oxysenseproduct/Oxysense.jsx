import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/landing/oxysenseproduct/hero';
import OxysenseOne from '../../components/landing/oxysenseproduct/oxysenseone';
import OxysenseTwo from '../../components/landing/oxysenseproduct/oxysensetwo';


const Oxysense = () => (
  <>
    <Helmet>
      <title>Oxysense Medantrik</title>
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
      <OxysenseOne />
      <OxysenseTwo />
    </div>
  </>
);

export default Oxysense;
