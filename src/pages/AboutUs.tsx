import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';
import ServicesSection from '../components/ServicesSection';

const AboutUs = (): JSX.Element => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
