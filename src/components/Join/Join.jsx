import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4h77aws', 'template_7h93pzb', form.current, '35Y_LlqIa9b1pf7TS')
          .then((result) => {
              alert('Verifique sua caixa de E-mail')
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="Join">
        <div className="left-j">
            <div className="programs-header">
                <span className='stroke-text'>Ready to</span>
                <span>Level Up</span>
            </div>
            <div className="programs-header">
                <span>Your Body</span>
                <span className='stroke-text'>With Us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} onSubmit={sendEmail} className='email-container'>
                <input type="email" name="user-email" placeholder='Enter your E-mail' />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join