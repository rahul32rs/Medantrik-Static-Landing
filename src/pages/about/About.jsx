// src/pages/About.js
import React from 'react';
import { Helmet } from 'react-helmet';
import About1 from '../../components/landing/about/About1';
import About2 from '../../components/landing/about/About2';
import About3 from '../../components/landing/about/About3';
import About4 from '../../components/landing/about/About4';
import About5 from '../../components/landing/about/About5';

import About7 from '../../components/landing/about/About7';

const About = () => (
  <>
    <Helmet>
      <title>AI Services in Perth | Smart Solutions for Business</title>
      <meta
        name="description"
        content="Get expert AI services in Perth to automate tasks, analyze data, and improve business efficiency with tailored AI-driven solutions."
      />
      <meta
        name="keywords"
        content="AI phone call automation, AI call answering service, AI voice assistant for calls, Automated call handling with AI, AI customer support calls, AI virtual receptionist, AI call centre solutions, AI phone support services, AI call services for small businesses, AI phone solutions for healthcare, AI-powered telemarketing, Automated appointment calls AI, AI outbound call services, AI inbound call management, AI phone call service Australia, AI voice bot Sydney, Automated calling solution Melbourne"
      />
      <link rel="canonical" href="https://multipleai.com.au/about" />
    </Helmet>

    <div>
      <About1 />
      <About2 />
      <About5 />
      <About3 />
      <About4 />
      <About7 />

    </div>
  </>
);

export default About;
