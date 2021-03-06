import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { pageAnimation } from '../Animation';
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
    background: #ccc;

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

const OurWork = (): JSX.Element => {
  return (
    <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <Movie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link to='/work/the-athlete'>
          <img src={athlete} alt='Athelete' />
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
