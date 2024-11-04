import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg'; 
import mail_icon from '../../assets/mail.svg';
import phone from '../../assets/phone.svg';
import loca from '../../assets/loca.svg';


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "250d3cdd-b86b-4e37-a34d-64d090a47dea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>delaritaraineer81@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt="" /><p>0923-212-212</p>
                    </div>
                    <div className="contact-detail">
                        <img src={loca} alt="" /><p>Cebu, PH</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name'name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact