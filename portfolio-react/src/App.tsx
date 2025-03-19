import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
