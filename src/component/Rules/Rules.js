import './Rules.css'
import { Fragment } from 'react'
import image from './image.png'
import Rule  from './Rules.png'
import content from './content.png'
import res_content from './res_content.png'
const Rules=()=>{
return(
<Fragment>
    <div className='rules_container'>
    <div className='rules_details'>
<img src={Rule} className='rules_details_rule'/>
<img src={content} className='rules_details_content'/>
<img src={res_content} className='res_rules_details_content'/>
</div>
<div>
<img src={image } className='rules_img'/>
</div>
</div>

    {/* <div style={{height: '0.5px', backgroundColor: '#FFFFFF',marginTop:'1rem',marginBottom:'5rem'}}></div> */}
</Fragment>
)
}
export default Rules