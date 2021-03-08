import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Nav = (): JSX.Element => {
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
        </li>
        <li>
          <Link to='/work'>2. Our Work</Link>
        </li>
        <li>
          <Link to='/contact'>3. Contact Us</Link>
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
    font-size: 1.8rem;
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
      margin: 1rem;
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

export default Nav;
