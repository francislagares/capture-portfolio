import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';

const App = (): JSX.Element => {
  return (
    <div className='app'>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
};

export default App;
