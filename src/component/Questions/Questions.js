import { Fragment } from 'react'
import image from './image/person.png'
import b1 from './image/1.png'
import b2 from './image/2.png'
import b3 from './image/3.png'
import b4 from './image/4.png'
import b5 from './image/5.png'
import b6 from './image/6.png'
import b7 from './image/7.png'
import Question from './image/Question.png'
import q1 from './image/q1.png'
import q2 from './image/q2.png'
import q3 from './image/q3.png'
import res_question_content from './image/res_question_content.png'
import res_answers from './image/res_answers.png'
import res_Question from './image/res_Question.png'
import './Questions.css'
const Questions=()=>{

return(
<Fragment>
    <div className='question_container'>
    <div className='question_details'>
    <img src={Question} className='question_title'/>
    <img src={b7} className='question' />
<img src={b1} className='question' style={{marginTop:'3.5rem'}}/>
<img src={b2} className='question'/>
<img src={b3} className='question'/>
<img src={b4} className='question'/>
<img src={b5} className='question'/>
<img src={b6} className='question'/>

</div>
<div>
<img src={image } className='question_img'/>
</div>
</div>


<div className='res_question_container'>
<img src={res_Question} className='res_Question'/>
<img src={res_answers} className='res_answers'/>
<img src={res_question_content} className='res_question_content'/>
<img src={image } className='res_question_img'/>
</div>

   <div style={{height: '0.5px', backgroundColor: '#FFFFFF',marginTop:'7rem',marginBottom:'3rem'}}></div>
</Fragment>
)
}
export default Questions