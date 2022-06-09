import React, { useRef, useState } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
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
    }

    return (
        <div className='contact'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h2 className="c-title"> You've made it this far ! Say hi !</h2>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="text" placeholder='Subject' name='user_subject' />
                        <input type="text" placeholder='Email' name='user_email' />
                        <textarea name="message" placeholder='Message' cols="20" rows="6"></textarea>
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
                    <div className="glitch" datatype='MoreComingSoon'>MoreComingSoon</div>
                    <div className="glow">MoreComingSoon</div>
                </div>
            </div>
        </div>
    )
}

export default Contact