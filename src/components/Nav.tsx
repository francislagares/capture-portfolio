import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

const Nav = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/work'>2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact'>3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  top: 0;
  margin: auto;
  padding: 1rem 10rem;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  position: sticky;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    #logo {
      display: inline-block;
      margin: 2rem;
    }

    ul {
      width: 100%;
      padding: 2rem;
      justify-content: space-around;

      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  bottom: -80%;
  left: 60%;
  width: 0%;

  /* prettier-ignore */
  height: .3rem;
  background: #23d997;
  position: absolute;

  @media screen and (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
