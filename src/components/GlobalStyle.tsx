import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 75%;
  }

  body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    button {
      padding: .3rem solid #23d997;
      color: white;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      background: transparent;
      transition: none;

      &:hover,
      &:focus {
        background-color: #23d997;
      }
    }
  }

  button {
    padding: 1rem 2rem;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    border: .3rem solid #23d997;
    cursor: pointer;
    background: transparent;
    transition: all .5s ease;
    font-family: 'Inter', sans-serif;

    &:hover,
    &:focus {
      background-color: #23d997;
    }
  }

  h2 {
    font-size: 4rem;
    font-weight: lighter;
  }

  h3 {
    color: white;
  }

  h4 {
    font-weight: bold;
  }

  a {
    font-size: 1.1rem;
  }

  span {
    color: #23d997;
    font-weight: bold;
  }

  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
`;

export default GlobalStyle;
