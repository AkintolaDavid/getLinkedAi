import { Fragment } from "react"
import sponsors from './image/sponsors.png'
import Partners from './image/Partners.png'
import content from './image/content.png'
import res_Partners from './image/res_Partners.png'
import res_content from './image/res_content.png'
import './Sponsor.css'
const Sponsor=()=>{
return(
    <Fragment>
 <div className='sponsor_container'>
 <img src={Partners} className='sponsor_partner'/>
 <img src={content} className='sponsor_content'/>
 <img src={sponsors} className='sponsor_sponsors'/>
</div>
<div className='res_sponsor_container'>
 <img src={res_Partners} className='res_sponsor_partner'/>
 <img src={res_content} className='res_sponsor_content'/>
 <img src={sponsors} className='sponsor_sponsors'/>
</div>

    <div style={{height: '0.5px', backgroundColor: '#FFFFFF',marginTop:'5rem',marginBottom:'5rem'}}></div>
    </Fragment>
)
}
export default Sponsor