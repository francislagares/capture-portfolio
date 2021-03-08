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
import ScrollTop from '../components/ScrollTop';
import { useScroll } from '../hooks/useScroll';
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import theracer from '../img/theracer-small.png';

const OurWork = (): JSX.Element => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();

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
      <Movie
        ref={element1}
        variants={fade}
        animate={controls1}
        initial='hidden'
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/the-racer'>
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt='The Racer' />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial='hidden'
      >
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/good-times'>
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt='Good Times' />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  @media screen and (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled(motion.div)`
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

export default OurWork;
