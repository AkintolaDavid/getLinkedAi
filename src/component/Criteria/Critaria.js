import { Fragment } from 'react'
import people from './image/people.png'
import criteria from './image/criteria.png'
import b1 from './image/1.png'
import b2 from './image/2.png'
import b3 from './image/3.png'
import b4 from './image/5.png'
import b5 from './image/4.png'
import  res_criteria from './image/res_criteria.png'
import  res_b1 from './image/res_1.png'
import  res_b2 from './image/res_2.png'
import  res_b3 from './image/res_3.png'
import  res_b4 from './image/res_4.png'
import  res_b5 from './image/res_5.png'
import Ellipse from './image/Ellipse.png'
import './Critaria.css'
import Button from '../UI/Button/Button'
const Criteria=()=>{
return  (
<Fragment>
    <div className='criteria_container'>
<div className='criteria_people_img'>
<img src={Ellipse} className='ellipse_img'/>
    <img src={people} className='criteria_img'/>
</div>
    <div className='res_criteria_people_img'>
    <img src={people} className='res_criteria_img'/>
    </div>
<div className='criteria_details'>
<img src={criteria}/>
<img src={b1}/>
<img src={b2}/>
<img src={b3} style={{height:'5.3rem'}}/>
<img src={b4}/>
<img src={b5}/>
<Button>Read More</Button></div>
<div className='res_criteria_details'>
<img src={res_criteria} style={{width:'25%',marginBottom:'1rem'}}/>
<img src={res_b1} style={{width:'45%',marginBottom:'1.5rem'}}/>
<img src={res_b2} style={{width:'45%',marginBottom:'1.5rem'}}/>
<img src={res_b3} style={{height:'7.6rem',width:'45%',marginBottom:'1.5rem'}}/>
<img src={res_b4} style={{width:'45%',marginBottom:'1.5rem'}}/>
<img src={res_b5} style={{width:'45%'}}/>
<Button style={{width:'26rem'}}>Read More</Button></div>

    </div>
    <div style={{height: '0.5px', backgroundColor: '#FFFFFF',marginTop:'5.2rem',marginBottom:'2rem'}}></div>
</Fragment>
)
}
 export default Criteria