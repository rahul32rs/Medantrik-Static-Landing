import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import nodexflowImg from '../../../../public/images/products/nodexflow.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const listItems = [
  "Checks lung health using smart AI technology",
  "Used and trusted by doctors and healthcare teams",
  "Helps patients understand their breathing in real time"
];


const Nodex1 = () => {
  return (
    <section id="details" className="my-12 mx-4 md:mx-8 lg:mx-16 bg-[#e8f4fd] py-10 px-6 md:px-12 lg:px-24 rounded-[2rem] shadow-md">
      <div  className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Animated Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-[2rem] overflow-hidden max-w-md md:max-w-lg lg:max-w-2xl">
            <img
              src={nodexflowImg}
              alt="NodeX AI Respiratory Diagnostic Device"
              className="w-full h-[470px] object-cover"
            />
          </div>
        </motion.div>

        {/* Animated Text */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
  Meet <span className="text-orange-600">NodeX</span>
</h2>

<p className="text-gray-700 text-base leading-relaxed">
  <strong>NodeX</strong> is a smart device made by Medantrik that helps check and understand lung health.
  It uses AI technology to measure breathing patterns and gives clear, real-time information
  about how well the lungs are working.
  <br /><br />
  NodeX is useful for both doctors and patients. Doctors can use it to better understand
  a patient’s lung condition, and patients can see their breathing data in a simple way.
  It helps in early detection of breathing problems and supports long-term lung care,
  making it easier to take the right action at the right time.
</p>


          {/* Animated List */}
          <motion.ul
            className="space-y-3 pt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {listItems.map((text, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-700"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <FaCheckCircle className="text-green-500 mt-1" />
                {text}
              </motion.li>
            ))}
          </motion.ul>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <button className="mt-6 px-7 py-3 rounded-full bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 transition duration-200 cursor-pointer">
                See How NodeX Works
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nodex1;
