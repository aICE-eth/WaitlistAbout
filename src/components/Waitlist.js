import React, { useState, useEffect } from 'react';
import LogoTwo from '../images/Group 49 (2).svg'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const Waitlist = ({onNavigate}) => {
  const [email, setEmail] = useState('');
  const [waitlist, setWaitlist] = useState([]);

  useEffect(() => {
    const storedWaitlist = localStorage.getItem('waitlist');
    if (storedWaitlist) {
      setWaitlist(JSON.parse(storedWaitlist));
    }
  },[]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddToWaitlist = () => {
    if (email.trim() !== '') {
      const updatedWaitlist = [...waitlist, email];
      setWaitlist(updatedWaitlist);
      setEmail('');
      localStorage.setItem('waitlist', JSON.stringify(updatedWaitlist));
    }
  };

  return (
    <div>
      
      <ul className = 'nav'>
        <li><img className = 'logoAlt'src ={LogoTwo} /></li>
        <li className='company-name'>
          <h1 className='course'>Course</h1>
          <h1 className='purple'>Cube</h1>
        </li>
        <li className = 'aboutLi'><button className='About'><h2 className = 'h2About'>About Us</h2></button></li>
      </ul>  
      <h2 className='waitlist'>Waitlist</h2>
      <input className='input' placeholder='Your Email' type="email" value={email} onChange={handleInputChange} />
      <button className='save' onClick={handleAddToWaitlist}>Save</button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {waitlist.map((email, index) => (
              <TableRow key={index}>
                <TableCell>{email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <button onClick={()=>onNavigate}> GOOGOGOGOGO</button>
    </div>
  );
};

export default Waitlist;








