import { Fragment } from "react"
import Button from "../UI/Button/Button"
import b1 from './image/1.png'
import b2 from './image/2.png'
import b3 from './image/3.png'
import b4 from './image/4.png'
import b5 from './image/5.png'
import b6 from './image/6.png'
import b7 from './image/7.png'
import b8 from './image/8.png'
import m1 from './image/m1.png'
import m2 from './image/m2.png'
import man from './image/man.png'
import res_polict_header from './image/res_polict_header.png'
import res_b1 from './image/res_1.png'
import res_b4 from './image/res_4.png'
import res_b7 from './image/res_7.png'
import res_b8 from './image/res_8.png'
import Vector from './image/Vector.png'
 import './Policy.css'
const Policy=()=>{
return(
    <Fragment>
<div className="policy_container">

<div className="policy_left">
<div className="policy_left_upperhalf">
<img src={b1} className='b1'/>
<img src={b2} className='b2'/>
<img src={b3} className='p_b3'/>
</div>
<div className="policy_left_lowerhalf">
<img src={b4} className='b4'/>
<img src={b5} className='b5'/>
<img src={b6} className='b6'/>
<div><img src={m1} className='m1'/><img src={b7} className='b7'/></div>
<div><img src={m2} className='m2'/><img src={b8} className='b8'/></div>
<Button className='policy_left_lowerhalf_btn'>Read More</Button>
</div>
</div>
<div className="policy_right">
</div>
<img src={Vector} className="policy_vector"/>
<img src={man} className="policy_man"/>
</div>

<div className="res_policy_container">

<div className="res_policy_left">
<div className="res_policy_left_upperhalf">
<img src={res_b1} className='res_b1'/>
<img src={b2} className='res_b2'/>
<img src={res_polict_header} className='res_b3'/>
<img src={res_b4} className='res_b4'/>
</div>
<div className="res_policy_left_lowerhalf">

<img src={b5} className='res_b5'/>
<img src={b6} className='res_6'/>
<div><img src={m1} className='res_m1'/><img src={res_b7} className='res_b7'/></div>
<div><img src={m2} className='res_m2'/><img src={res_b8} className='res_b8'/></div>
<Button className='res_policy_left_lowerhalf_btn'>Read More</Button>
</div>
</div>
<div className="res_policy_right">
</div>
<img src={Vector} className="res_policy_vector"/>
<img src={man} className="res_policy_man"/>
</div>
{/* <div style={{height: '0.5px', backgroundColor: '#FFFFFF',marginTop:'6rem',marginBottom:'2rem'}}></div> */}

    </Fragment>
)
}
export default Policy