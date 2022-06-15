import React, { useRef, useState } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_3gozegq', 'template_cj0md0s', formRef.current, '0od2wBCVT_BgXcxd3')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            }); 
            e.target.reset();
    }


    return (
        <div className='contact'>
            <div className="c-bg" style={{backgroundImage:theme.state.darkMode ? 'linear-gradient(180deg, #525e64, #d7a6d8, #f8c6e1, #f2dbef, #525e64)': 'linear-gradient(180deg, #ffffff, #b0e0fa, #b5cff9, #5785d4, #ffffff)'}} ></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h2 className="c-title"> You've made it this far ! Say hi !</h2>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#b5bfc4"}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && "#b5bfc4"}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && "#b5bfc4"}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && "#b5bfc4"}} name="message" placeholder='Message' cols="20" rows="6"></textarea>
                        <div className='c-button'>
                            <div className='c-sent'>
                                {done && "Sent!"}
                            </div>
                            <button>Send</button>
                        </div>
                    </form>
                    <div>
                    <a href="https://github.com/JohnPaul-Londono" target="_blank" rel="noreferrer">
                        <GitHubIcon className='c-GitHub2' />
                    </a>
                    <a href="https://www.linkedin.com/in/john-londono-7a4514231/" target="_blank" rel="noreferrer">
                        <LinkedInIcon className='c-LinkedIn' />
                    </a>
                </div>
                </div>
                <div className="c-right">
                    {/* <div className="glitch" datatype='MoreComingSoon'>MoreComingSoon</div>
                    <div className="glow">MoreComingSoon</div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact