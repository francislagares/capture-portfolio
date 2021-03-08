import React from 'react';
import styled from 'styled-components';
import { scrollReveal } from '../Animation';
import { useScroll } from '../hooks/useScroll';
import clock from '../img/clock.svg';
import diaphgram from '../img/diaphragm.svg';
import home2 from '../img/home2.png';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import { About, Description, Image } from '../styles';

const ServicesSection = (): JSX.Element => {
  const [element, controls] = useScroll();

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='Clock Icon' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={teamwork} alt=' Icon' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={diaphgram} alt='Diaphgram Icon' />
              <h3>Diaphgram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={money} alt='Money Icon' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='Camera' />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;
  }

  h3 {
    padding: 1rem;
    color: black;
    margin-left: 1rem;
    background: white;
  }
`;

export default ServicesSection;
