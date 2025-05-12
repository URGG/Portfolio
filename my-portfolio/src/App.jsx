import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Add more sections like About, Projects, Experience, Contact here */}
    </div>
  );
};

export default App;
