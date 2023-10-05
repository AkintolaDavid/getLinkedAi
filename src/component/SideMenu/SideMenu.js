import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SideMenu.css'; // Create the corresponding CSS file for styling
import cancel from './cancel.png'
const SideMenu = (props) => {
    const navigate=useNavigate()
    const registerHandler=()=>{
navigate('/register')
    }
    const contactHandler=()=>{
        navigate('/contact')
    }
  return (
    <div className="sideMenu">
        <div onClick={props.onClose}>
            <img src={cancel} className='sidemenuCancelBtn' />
        </div>
      <ul className="sideMenuUL">
        <li>Timeline</li>
        <li>Overview</li>
        <li>FAQs</li>
        <li onClick={contactHandler}>Contact</li>
        <button className='sidemenuBtn' onClick={registerHandler}>Register</button>
      </ul>
    </div>
  );
};

export default SideMenu;
