import axios from 'axios';
import react from 'react';
import './Contact.css'
import HeaderContact from '../HeaderContact/HeaderContact'
import { Fragment,useState } from 'react'
import ig from './image/ig.png'
import fb from './image/fb.png'
import X from './image/X.png'
import lkn from './image/lkn.png'
import res_email from './image/res_email.png'
import Questions from './image/Questions.png'
import Group1 from './image/Group1.png'
import Button from '../UI/Button/Button'
import { parsePath } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Contact=()=>{
  const navigate=useNavigate()
    const [formData, setFormData] = useState({
      
        email:"",
      phone_number:"",
        first_name: "",
        message:"",
        topic:''
    
      });

      // async function handleSubmit(e) {
      //   e.preventDefault();
      // console.log('submit')
 
      //     console.log('response.status2');
      //     const response = await axios.post("https://backend.getlinked.ai/hackathon/contact-form", {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify(formData),
      //     });
      //     await response.json(); 
      //     console.log(response.status);
      // }

      async function handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
      
        const response = await axios.post("https://backend.getlinked.ai/hackathon/contact-form", {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      
        if (response.status === 201 || response.status === 200) {
          console.log('POST request successful!');
        } else {
          console.log('POST request failed! Status code:', response.status);
        }
      }
      
      
      
const backArrowHandler=()=>{
navigate('/')
}
    return(
<Fragment>

<div className='contact_container'>
<HeaderContact/>
<div className='contact_left'>
<h1>Get in touch</h1>
<p>Contact <br></br> Information</p>
<p>27,Alara Street <br></br> Yaba 100012<br></br>  Lagos State</p>
<p>Call Us : 07067981819</p>
<p>we are open from Monday-Friday<br></br> 08:00am - 05:00pm</p>
<h4>Share on</h4>

     <span ><img src={ig} className='contact_media'/></span>
          <span  ><img src={X} className='contact_media'/></span>
          <span  ><img src={fb} className='contact_media'/></span>
          <span  ><img src={lkn} className='contact_media'/></span>
</div>
<div className='contact_right'>

 
      <form onSubmit={handleSubmit}>
          <span>Questions or need assistance?</span>
          <span>Let us know about it!</span>
        
        <input
        placeholder='First Name'
          type="text"
          id="fname"
          name="firstname"
          value={formData.first_name}
          onChange={(event) => setFormData({ ...formData, first_name: event.target.value })}
        />
        
      
        <input
         placeholder='Mail'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
        
         
        <textarea
         placeholder='Message'
          id="message"
          name="message"
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
        />
        
        <Button>Submit</Button>
      </form>
     
</div>
</div>

<div className='res_contact_container'>
<img src={Group1} className='res_contact_group' onClick={backArrowHandler}/> 
<div className='res_contact_header'>
<img src={Questions} className='res_contact_question'/> 
<img src={res_email} className='res_contact_email'/> 
</div>
<div className='contact_input'>
<input
        placeholder='First Name'
          type="text"
          id="fname"
          name="firstname"
          value={formData.first_name}
          onChange={(event) => setFormData({ ...formData, first_name: event.target.value })}
        />
        
      
        <input
         placeholder='Topic'
          type="email"
          id="text"
          name="Topic"
          value={formData.topic}
          onChange={(event) => setFormData({ ...formData, topic: event.target.value })}
        />


<input
         placeholder='Mail'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
        
         
        <textarea
         placeholder='Message'
          id="message"
          name="message"
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
        />

        <button className='contactSubmit' onClick={handleSubmit}>Submit</button>
        <div style={{color:'#D434FE',fontSize:'0.7rem',marginBottom:'0.5rem'}}>Share on</div>
        <div>
        <span ><img src={ig} className='contact_media'/></span>
          <span  ><img src={X} className='contact_media'/></span>
          <span  ><img src={fb} className='contact_media'/></span>
          <span  ><img src={lkn} className='contact_media'/></span>
        </div>
</div>
</div>
</Fragment>
         
    )
}
export default Contact