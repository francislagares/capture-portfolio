import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  slider,
  sliderContainer,
  fade,
  photoAnim,
  pageAnimation,
  lineAnim,
} from '../Animation';
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import theracer from '../img/theracer-small.png';

const Work = styled(motion.div)`
  background: white;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    background: #23d997;

    /* prettier-ignore */
    height: .5rem;
    margin-bottom: 3rem;
  }

  img {
    width: 70vh;
    height: 100%;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const OurWork = (): JSX.Element => {
  return (
    <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/the-athlete'>
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt='Athelete' />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className='line'></div>
        <Link to='/work/the-racer'>
          <img src={theracer} alt='Racer' />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className='line'></div>
        <Link to='/work/good-times'>
          <img src={goodtimes} alt='Good Times' />
        </Link>
      </Movie>
    </Work>
  );
};

export default OurWork;
