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

function App() {
  return (
    <div className="w-full bg-brand-navy min-h-screen">
      <div className="w-full flex flex-col gap-0 p-0 overflow-hidden relative">
        <Header />
        <Hero />
        <MissingX />
        <Measurements />
        <IntelligenceLayer />
        <Infrastructure />
        <Team />
        <Timeline />
        <JoinUs />
      </div>
    </div>
  );
}

export default App;
