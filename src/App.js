import Waitlist from './components/Waitlist'
import './App.css';
import About from './components/About'
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('waitlist');
  const handleNavigateToAbout = () => {
    setCurrentPage('waitlist');
  };
  const handleNavigateToWaitlist = () => {
    setCurrentPage('about');
 
  return (
    <div className="App">
       {currentPage === 'waitlist' && <Waitlist onNavigate={handleNavigateToAbout} />}
      {currentPage === 'about' && <About onNavigate={handleNavigateToWaitlist} />}

    </div>
  );
}
}

export default App;
