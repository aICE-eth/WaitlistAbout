import React, { useState, useEffect } from 'react';
import LogoTwo from '../images/Group 49 (2).svg'



const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [waitlist, setWaitlist] = useState([]);
  const [showInput, setShowInput] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const storedWaitlist = localStorage.getItem('waitlist');
    if (storedWaitlist) {
      setWaitlist(JSON.parse(storedWaitlist));
    }
  }, []);


  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveClick = () => {
    setWaitlist([...waitlist, email]);
    setEmail('');
    localStorage.setItem('waitlist', JSON.stringify(waitlist));
    setShowInput(false);
    setShowThankYou(true);
  };

  const handleGoBack = () => {
    setShowInput(true);
    setShowThankYou(false);
  };


  return (
    <div>
      
      <ul className = 'nav'>
    
        <li><img className = 'logoAlt'src ={LogoTwo} /></li>
        <li className='company-name'>
          <h1 className='course'>Course</h1>
          <h1 className='purple'>Cubes</h1>
        </li>
        <li className = 'aboutLi'><button className='About'><h2 className = 'h2About'>About Us</h2></button></li>
      </ul>  
        <div className ='texts'>
          <p className='waitlist'>TikTok for Education! </p>
        </div>
      {showInput && (
        <div>
          <input className='input' placeholder='Enter Your Email' type="email" value={email} onChange={handleInputChange}  />
          <button className='save' onClick={handleSaveClick}>Join Waitlist</button>
        </div>
        )} 
      {showThankYou && (
        <div>
          <button onClick={handleGoBack} className ='thankBtn'> <p className='thank-you'>Thank you!</p></button>
        </div>
      )}
    </div>
  );
};

export default Waitlist;








