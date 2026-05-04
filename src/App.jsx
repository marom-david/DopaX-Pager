import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MissingX from './components/MissingX';
import Measurements from './components/Measurements';
import IntelligenceLayer from './components/IntelligenceLayer';
import Infrastructure from './components/Infrastructure';
import Team from './components/Team';
import Timeline from './components/Timeline';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full font-outfit text-brand-navy-dark overflow-x-hidden">
      <Header />
      <Hero />
      <MissingX />
      <Measurements />
      <Infrastructure />
      <IntelligenceLayer />
      <Team />
      <Timeline />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
