import { Fragment } from "react"
import logo from './image/logo.png'
import partner from './image/partner.png'
import prize from './image/prize.png'
import Rewards from './image/Rewards.png'
import Testimonials from './image/Testimonials.png'
import Highlight from './image/Highlight.png'
import P_AND_R from './image/PrizesandRewards.png'
import res_Highlight from './image/res_Highlight.png'
import res_P_AND_R from './image/res_PrizesandRewards.png'
import './Prize.css'
const Prize=()=>{
return(
    <Fragment>
    <div className='prize_container'>
    <div className='prize_details'>
    <img src={logo} className='prize_title'/>
</div>
<div className="prize_right">
<img src={P_AND_R} className='prize_img' />
<img src={Highlight} className='prize_highlight'/>

<img src={Rewards} className='prize_reward' />
</div>



</div>
<div className="res_prize_right">
 
<img src={res_P_AND_R} className='res_prize_img' />
<img src={res_Highlight} className='res_prize_highlight'/>
<img src={logo} className='res_prize_title'/>
<img src={Rewards} className='prize_reward' />

</div>
    <div style={{height: '0.5px', backgroundColor: '#FFFFFF',marginTop:'7rem',marginBottom:'3rem'}}></div>
    </Fragment>
)
}
export default Prize