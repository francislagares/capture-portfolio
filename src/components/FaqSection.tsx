import React from 'react';
import styled from 'styled-components/macro';
import { About } from '../styles';

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    /* prettier-ignore */
    padding-bottom: .2rem;
    font-weight: lighter;
  }

  .faq-line {
    width: 100%;

    /* prettier-ignore */
    height: .2rem;
    margin: 2rem 0;
    background: #ccc;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

const FaqSection = (): JSX.Element => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>How do I start ?</h4>
        <div className='answer'>
          <p>Lorem ipsum sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing Necessitatibus,
            neque.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Daily Schedule</h4>
        <div className='answer'>
          <p>Lorem ipsum sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing Necessitatibus,
            neque.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Different Payment Methods</h4>
        <div className='answer'>
          <p>Lorem ipsum sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing Necessitatibus,
            neque.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>What Products do you offer.</h4>
        <div className='answer'>
          <p>Lorem ipsum sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing Necessitatibus,
            neque.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
    </Faq>
  );
};

export default FaqSection;
