import { Fragment } from 'react'
import intro from './Introduction.png'
import content from './content.png'
import star from './star.png'
import idea from './idea.png'
import res_intro from './res_Introduction.png'
import res_content from './res_content.png'
import './Introduction.css'
const Introduction=()=>{
return  (
<Fragment>
      <div style={{height: '0.2px', backgroundColor: '#FFFFFF',marginTop:'3.7rem',marginBottom:'5rem'}}></div>
    <div className='intro_container'>
<div  className='intro_img_div'><img src={idea} className='intro_img'/></div>
<div className='intro_details'>
<img src={intro} className='intro_intro'/>
<img src={content} className='intro_content'/>
<img src={res_intro} className='res_intro_intro'/>
<img src={res_content} className='res_intro_content'/>
</div>
    </div>
    <div style={{height: '0.2px', backgroundColor: '#FFFFFF',marginTop:'4.2rem',marginBottom:'-2rem'}}></div>
</Fragment>
)
}
 export default Introduction