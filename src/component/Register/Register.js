import './Register.css'
import HeaderRegister from '../HeaderRegister/HeaderRegister'
import { Fragment,useState } from 'react'
import image from './image/image.png'
import move from './image/move.png'
import Confirmation from './image/Confirmation.png'

const Register=()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

  

  const closeModal = () => {
    
    setIsModalOpen(false);
  };

    const [formData, setFormData] = useState({
        firstname: "",
        email: "",
        message: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        setIsModalOpen(true);
        event.preventDefault();
   
        //'Submit the form data to a server or save it to a database
      };
    return(
<Fragment>
{isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={Confirmation} alt="Modal" className="modal-image" />
          </div>
        </div>
      )}

<div className='register_container'>
<HeaderRegister/>
<div className='register_left'>
<img src={image} className='register_left_image'/>

</div>
<div className='register_right'>

 
      <form onSubmit={handleSubmit}>
          <span className='registerTest'>Register</span>
          <img src={move} className='register_right_image'/>
          <span className='create_account'>CREATE YOUR ACCOUNT</span>
        
      <div className='register_form_container'>
      <div className="form-container">
          <label>Team’s Name</label>
      <input
      className='register_input'
        placeholder='Enter the name of your group'
          type="text"
          id="fname"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
             </div>


        <div className="form-container" id='adjustedToLeft'>
        <label>Phone</label>
        <input
            className='register_input'
         placeholder='Enter your phone number'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        </div>
      </div>
 
        
         
       
      <div className='register_form_container'>
      <div className="form-container">
          <label>Email</label>
      <input
      className='register_input'
        placeholder='Enter your email address'
          type="text"
          id="fname"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
             </div>


        <div className="form-container" id='adjustedToLeft'>
        <label>Project Topic</label>
        <input
            className='register_input'
         placeholder='What is your group project topic'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        </div>
      </div>





      <div className='register_form_container'>
      <div className="form-container">
          <label>Category</label>
          <select     className='register_input' 
          placeholder='select your category'>
              <option>
              Select your category
              </option>
<option>
    category 1
</option>
<option>
    category 2
</option>
<option>
    category 3
</option>
          </select>
    
             </div>


        <div className="form-container" id='adjustedToLeft'>
        <label>Group Size</label>
        <select     className='register_input' 
          placeholder='select group size'>
              <option >
              Select group size
              </option>
<option>
    1
</option>
<option>
    2
</option>
<option>
    3
</option>
          </select>
        </div>
      </div>
      <span className='review_reg'>Please review your registration details before submitting</span>
      <span>
  <input type="checkbox" className='checkbox'/>
  <span className='agreed_terms'>I agreed with the event terms and conditions and privacy policy</span>
  
</span>
        <button>Register Now</button>
      </form>
     
</div>
</div>






<div className='res_register_container'>

 
<span className='registerTest'>Register</span>
        
<img src={image} className='res_register_left_image'/>
 
<img src={move} className='res_register_right_image'/>
<span className='res_create_account'>CREATE YOUR ACCOUNT</span>
      <form onSubmit={handleSubmit} className='registerForm'>
         
        
        
     
      <div className="res_form-container">
          <label>Team’s Name</label>
      <input
      className='res_register_input'
        placeholder='Enter the name of your group'
          type="text"
          id="fname"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
             </div>


        <div className="res_form-container" id='res_adjustedToLeft'>
        <label>Phone</label>
        <input
            className='res_register_input'
         placeholder='Enter your phone number'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        </div>
     
 
        
         
       
    
      <div className="res_form-container">
          <label>Email</label>
      <input
      className='res_register_input'
        placeholder='Enter your email address'
          type="text"
          id="fname"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
             </div>


        <div className="res_form-container" id='res_adjustedToLeft'>
        <label>Project Topic</label>
        <input
            className='res_register_input'
         placeholder='What is your group project topic'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        </div>
    
      <div className="res_form-container">
          <label>Category</label>

          <select     className='res_register_input' 
          placeholder='select your category'>
              <option>
              Select your category
              </option>
<option>
    category 1
</option>
<option>
    category 2
</option>
<option>
    category 3
</option>
          </select>
    
           
        <label>Group Size</label>
        <select     className='res_register_input' 
          placeholder='select group size'>
              <option >
              Select group size
              </option>
<option>
    1
</option>
<option>
    2
</option>
<option>
    3
</option>
          </select>
        
      </div>
  <div className='register_end'>
  <span className='res_review_reg'>Please review your registration details before submitting</span>
      <span>
  <input type="checkbox" className='res_checkbox'/>
  <span className='res_agreed_terms'>I agreed with the event terms and conditions and privacy policy</span> 
</span>
        <button className='registerSubmitBtn'>Register Now</button>
  </div>
      </form>
     
 
</div>
</Fragment>
         
    )
}
export default Register