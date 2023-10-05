import './Footer.css'
import b1 from './image/1.png'
import res_b2 from './image/res_2.png'
import b2 from './image/2.png'
import b3 from './image/3.png'
import b4 from './image/4.png'
import ig from './image/ig.png'
import fb from './image/fb.png'
import X from './image/X.png'
import lkn from './image/lkn.png'
import call from './image/call.png'
import location from './image/location.png'
import media from './image/media.png'
const Footer=()=>{
    return(
        <div className="footer">
  <div className="footer__addr">
      <img src={b1} className="footer__1"/>
   
    <img src={b2} className="footer__2"/>
    <img src={res_b2} className="res_footer__2"/>
    <img src={b3} className="footer__3"/>
  </div>
  
  <ul className="footer__nav">
   
    
    <li className="nav__item">
      <h2 className="nav__title">Useful Links</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">Overview </a>
        </li>
        
        <li>
          <a href="#">Timeline </a>
        </li>
        
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
        <li>
          <a href="#" style={{color:'#D434FE'}}>Follow Us</a> 
        </li>
     <div className='footer_media_container'>
     <span ><img src={ig} className='footer_media'/></span>
          <span  ><img src={X} className='footer_media'/></span>
          <span  ><img src={fb} className='footer_media'/></span>
          <span  ><img src={lkn} className='footer_media'/></span>
     </div>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Contact Us</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#"><img src={call} className='footer_icon'/>+234 679 81819</a>
        </li>
        
        <li>
          <a href="#"><img src={location} className='footer_icon'/>27, Alara Street Yaba 100012 Lagos State</a>
        </li>
        
        
      </ul>
    </li>
  </ul>
  
  <div className='legal'>
  <img src={b4} className='legal_img'/>
  </div>
</div>
    )
}
export default Footer