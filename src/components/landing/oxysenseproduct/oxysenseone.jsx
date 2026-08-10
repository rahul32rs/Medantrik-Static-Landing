import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import oxysenseImg from "/images/products/oxysense/oxysensebreak.jpg"; 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const listItems = [
  "High-precision oxygen measurement",
  "Reliable readings from 1% to 100% O₂",
  "Medical & industrial grade sensor technology"
];

const Oxysense1 = () => {
  return (
    <section
      id="oxysensedetails"
      className="my-12 mx-4 md:mx-8 lg:mx-16 bg-[#e8f4fd] py-10 px-6 md:px-12 lg:px-24 rounded-[2rem] shadow-md"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

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
              src={oxysenseImg}
              alt="OxySense Oxygen Purity Meter"
              className="w-full h-[470px] object-cover"
            />
          </div>
        </motion.div>

        {/* Animated Text */}
        <motion.div
          className="w-full lg:w-1/2 space-y-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet <span className="text-orange-600">OxySense</span>
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            <strong>OxySense</strong> is a high-precision oxygen purity meter by
            Medantrik, designed to deliver accurate and reliable oxygen
            measurements for medical, laboratory, and industrial use.
          </p>

          {/* Key Points */}
          <motion.ul
            className="space-y-3 pt-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
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

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <button className="mt-6 px-7 py-3 rounded-full bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 transition duration-200">
                Learn More About OxySense
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Oxysense1;
