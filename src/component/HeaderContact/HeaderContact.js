import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";
import image from './getlinked.png'
import contact_img from './Contact.png'
import Button from "../UI/Button/Button"
 
 
import './HeaderContact.css'
 
const HeaderContact=(props)=>{
    const navigate=useNavigate()
    const registerHandler=()=>{
navigate('/register')
    }
    
return(
<Fragment>
<div className="header">
<img src={image} className='icon'/>
 <ul>
     <li>Timeline</li>
     <li>Overview</li>
     <li>FAQs</li>
     
 </ul>
 <img src={contact_img} className='contact_img'/>
<div onClick={registerHandler}  > <Button className="header_register_button">Register</Button></div>
 
   </div>
 
</Fragment>
)
}
export default HeaderContact