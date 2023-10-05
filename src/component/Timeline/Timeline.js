import { Fragment } from 'react'
import './Timeline.css'
import timeline from './Timeline.png'
import content from './content.png'
import res_date from './res_date.png'
import res_numbers from './res_numbers.png'
import res_content from './res_content.png'
import Timelinelogo from './Timelinelogo.png'
const Timeline=()=>{
return<Fragment>
<div className='timelineContainer'>
<img src={content} className='timeline_content'/> 
  <img src={timeline} className='timeline'/> 
    <div style={{height: '0.5px', backgroundColor: '#FFFFFF',marginTop:'4rem',marginBottom:'4rem'}}></div> 
</div>
<div className='res_timelineContainer'>
<div><img src={Timelinelogo} className='Timelinelogo'/></div>
<div><img src={res_content} className='res_content'/></div>
<div className='res_timeline'>
<span>
  <img src={res_numbers} className='res_numbers'/>
  </span>
  <span>
  <img src={res_date} className='res_date'/>
  </span>
 
</div>
</div>
</Fragment>
}
export default Timeline