import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Social from './components/Social';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Experience />
      <Social />
      <Footer />
    </div>
  );
};

export default App;


