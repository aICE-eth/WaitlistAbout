import About from './About.js';
/*import Waitlist from './Waitlist';*/
import { useState } from 'react';

function App() {

  /*const [currentPage, setCurrentPage] = useState('waitlist');

  const handleNavigateToAbout = () => {
    setCurrentPage('about');
  };

  const handleNavigateToWaitlist = () => {
    setCurrentPage('waitlist');
  };*/

  return (
    <div>
      {/*
      /*{currentPage === 'waitlist' && <Waitlist onNavigate={handleNavigateToAbout} />}
      {currentPage === 'about' && <About onNavigate={handleNavigateToWaitlist} />}
  */}
      <About />
    </div>

  );
}

export default App;

