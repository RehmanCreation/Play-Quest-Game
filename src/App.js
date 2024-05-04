import React from 'react';
import HeroSection from './components/HeroSection';
import GamingWorld from './components/GamingWorld';
import VideoSection from './components/VideoSection';
import UpcomingMatch from './components/UpcomingMatch';
import PopularGame from './components/PopularGame';
import ConnectGame from './components/ConnectGame';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <GamingWorld/>
      <VideoSection/>
      <UpcomingMatch/>
      <PopularGame/>
      <ConnectGame/>
      <Footer/>
      {/* Add more components or content here */}
    </div>
  );
}

export default App;
