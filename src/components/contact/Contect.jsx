import './Contect.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";
import { useState } from 'react';



const Contect = () => {
    const [isSucess,setSuccess]=useState(false)

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key",import.meta.env.VITE_API_KEY);
            
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch(import.meta.env.VITE_API_PATH, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            setSuccess(true)
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contect-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take a new project, so feel free to send me a message about anything that you want me to work on.You can contact any time </p>
                <div className="contact-details">
                    <div className="contect-detail">
                        <img src={mail_icon} alt="" /><p>abhisheknamdev46867@gmail.com</p>
                    </div>
                    <div className="contect-detail">
                        <img src={call} alt="" /><p>+91 8120439874</p>
                    </div>
                    <div className="contect-detail">
                        <img src={location} alt="" /><p>Indore, MadhayaPradesh India</p>
                    </div>
                </div>
            </div>
            <form action="" className='contact-right' onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name.' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-subit'>Send Message</button>
                <div>{isSucess?
                    <p className='send'>👍🏻 Message send SucessFully...</p>:' '}
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default Contect