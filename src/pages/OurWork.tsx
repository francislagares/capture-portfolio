import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import theracer from '../img/theracer-small.png';

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;

  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    /* prettier-ignore */

    height: .5rem;
    background: #ccc;
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
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link>
          <img src={athlete} alt='Athelete' />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className='line'></div>
        <Link>
          <img src={theracer} alt='Racer' />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className='line'></div>
        <Link>
          <img src={goodtimes} alt='Athelete' />
        </Link>
      </Movie>
    </Work>
  );
};

export default OurWork;
