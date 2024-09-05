import React from 'react';
import Analytics from './components/Analytics';
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer';
import Hero from './components/Hero'
import NavBar from './components/NavBar';
import Card from './components/Cards'

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Card/>
      <Footer/>

    </div>
  );
}

export default App;
