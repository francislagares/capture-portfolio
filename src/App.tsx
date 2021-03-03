import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';

const App = (): JSX.Element => {
  return (
    <div className='app'>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
};

export default App;
