/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components/macro';
import { fade } from '../Animation';
import { useScroll } from '../hooks/useScroll';
import { About } from '../styles';
import Toggle from './Toggle';

const FaqSection = (): JSX.Element => {
  const [element, controls] = useScroll();

  return (
    <Faq variants={fade} animate={controls} initial='hidden' ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How I Do Start?'>
          <div className='answer'>
            <p>Lorem ipsum sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing Necessitatibus,
              neque.
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Lorem ipsum sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              atque.
            </p>
          </div>
        </Toggle>
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing Necessitatibus,
              neque.
            </p>
          </div>
        </Toggle>
        <Toggle title='What Products do you offer.'>
          <div className='answer'>
            <p>Lorem ipsum sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing Necessitatibus,
              neque.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

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

export default FaqSection;
