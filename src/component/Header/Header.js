import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";
import image from './getlinked.png'
import sidemenu from './sidemenu.png'
 import SideMenu from "../SideMenu/SideMenu"
import './Header.css'
import Button from "../UI/Button/Button"
import { useState } from "react"
const Header=(props)=>{
    const[sideMenuShow,setSideMenuShow]=useState(false)
    const navigate=useNavigate()
    const contactHandler=()=>{
navigate('/contact')
    }
    const registerHandler=()=>{
        navigate('/register')
            }

const sidemenuHandler=()=>{
     setSideMenuShow(!sideMenuShow)
}

const closeSideMenuHandler = () => {
    setSideMenuShow(false);
  };

return(
<Fragment>
<div className="header">
    
<img src={image} className='headerLogo'/>
 <ul className="headerUL">
     <li>Timeline</li>
     <li>Overview</li>
     <li>FAQs</li>
     <li onClick={contactHandler}> Contact </li>
 </ul>
<div onClick={registerHandler} className='headerRegisterbtn'> <Button >Register</Button></div>
<img src={sidemenu} onClick={sidemenuHandler} className='headerSidemenu'/>
 

   </div>
   {/* <div style={{height: '0.5px', backgroundColor: '#FFFFFF',marginTop:'0.5rem',marginBottom:'0.5rem'}}></div> */}
   {sideMenuShow&&  <div className={`sideMenu ${sideMenuShow ? 'open' : ''}`}>
        <SideMenu onClose={sidemenuHandler}/>
      </div>}
</Fragment>
)
}
export default Header