import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pageAnimation, titleAnim } from '../Animation';
import ScrollTop from '../components/ScrollTop';

const ContactUs = (): JSX.Element => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{
        background: '#fff',
      }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send An Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media screen and (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;

  @media screen and (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 1rem;
    font-size: 2rem;
  }
`;

export default ContactUs;
