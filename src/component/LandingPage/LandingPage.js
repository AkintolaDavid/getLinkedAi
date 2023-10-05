import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import man from './man.png'
import title from './Title.png'
import ignite from './ignite.png'
import man_overlay from './man_overlay.png'
import Button from '../UI/Button/Button'
import responsiveTitle from './reponsiveTitle.png'
import responsiveParticipate from './responsiveParticipate.png'
import './LandingPage.css'
 
const LandingPage=()=>{
  const navigate=useNavigate()
  const LP_RegisterBtn=()=>[
navigate('/register')
  ]
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(countdown);
        // Timer reached 0, you can handle this event here
      } else {
        if (seconds === 0) {
          if (minutes === 0) {
            setHours(hours - 1);
            setMinutes(59);
          } else {
            setMinutes(minutes - 1);
          }
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, [hours, minutes, seconds]);

return(<div className='LP_container'>
<div className="ignite">
  <img src={ignite} className="lp_ignite_img" />
</div>

<div className="ignite_res">
  <img src={ignite} className="lp_ignite_img_res" />
</div>
 
 <div className='LP_sub_container'>
 <div>
<img src={title} className='title'/>
<div className='res_title_container'><img src={responsiveTitle} className='res_title'/></div>
<div className='participateText'>
Participate in getlinked tech Hackathon 2023 stand <br />
a chance to win a Big prize
</div>
<div className='res_participateText'>
<img src={responsiveParticipate} className='res_participateText_img'/>
</div>
<div className='lpRegisterBtn'  onClick={LP_RegisterBtn}><Button >Register</Button></div>
<div className='res_lpRegisterBtn'  onClick={LP_RegisterBtn}><button className='res_lpRegisterBtnBtn'>Register</button></div>
<div className='timer'>
        <span className='timer_hour'>{hours.toString().padStart(2, '0')}</span>
        <span className='timer_alpha'>H</span>
        <span className='timer_hour'>{minutes.toString().padStart(2, '0')}</span>
        <span className='timer_alpha'>M</span>
        <span className='timer_hour'>{seconds.toString().padStart(2, '0')}</span>
        <span className='timer_alpha'>S</span>
      </div>
    </div>
    <div className='man_container'>
    <img src={man_overlay} className='man_overlay'/> 
    <img src={man} className='man'/>
    </div>
    <div className='res_man_container'>
    <img src={man_overlay} className='res_man_overlay'/> 
    <img src={man} className='res_man'/>
    </div>
 </div>
</div>)
}
export default LandingPage