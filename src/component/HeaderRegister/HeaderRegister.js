import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";
import image from './getlinked.png'
import Btn from './RegisterButton.png'
 
import './HeaderRegister.css'
 
const HeaderRegister=(props)=>{
    const navigate=useNavigate()
    const contactHandler=()=>{
navigate('/contact')
    }
    
return(
<Fragment>
<div className="header">
<img src={image} className='icon'/>
 <ul>
     <li>Timeline</li>
     <li>Overview</li>
     <li>FAQs</li>
     <li onClick={contactHandler}> Contact </li>
 </ul>
{/* <div onClick={registerHandler}> <button className="header_register_button">Register</button></div> */}
<img src={Btn}  className="header_register_button"/>

   </div>
   {/* <div style={{height: '0.5px', backgroundColor: '#FFFFFF',marginTop:'0rem',marginBottom:'1.5rem'}}></div> */}
</Fragment>
)
}
export default HeaderRegister