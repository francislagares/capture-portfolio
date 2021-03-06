import React from 'react';
import { motion } from 'framer-motion';
import { titleAnim, photoAnim, fade } from '../Animation';
import Wave from '../components/Wave';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';

const AboutSection = (): JSX.Element => {
  return (
    <About>
      <Description>
        <div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt='Photographer with camera'
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
