import React from 'react'
import "./Contacts.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash'
import { useState } from 'react';
// import { Toast } from 'react-toastify/dist/components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Contacts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    //handle submit button
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!name || !email || !msg) {
                toast.error("Please Provide all fields");
            }
            const res = await axios.post("/api/v1/portfolio/sendEmail", { name, email, msg })
            // validation success
            if (res.data.success) {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMsg("");
            } else {
                toast.error(res.data.message);
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <Flash>
                <div className="contacts" id='contacts'>
                    <div className="card card0 border-0">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                                <div className="card1">
                                    <div className="row border-line">
                                        <img className='image' src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg" alt="contact" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                                <div className="card2 d-flex card border-0 px-4 py-5">
                                    <div className="row px-3">
                                        <h6>Contact With
                                            <a href="https://www.linkedin.com/in/aayush-bhandari-99b504257/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                                                <FaLinkedin size={30} color='blue' className='ml-1 ms-2' />
                                            </a>
                                            <a href="https://github.com/Aayush2061" target="_blank" rel="noopener noreferrer" className="contact-icon">
                                                <FaGithub size={30} color='black' className='ml-1 ms-2' />
                                            </a>
                                            <a href="https://www.facebook.com/ayushbhanda" target="_blank" rel="noopener noreferrer" className="contact-icon">
                                                <FaFacebook size={30} color='blue' className='ml-1 ms-2' />
                                            </a>
                                        </h6>
                                    </div>
                                    <div className="row px-3 mb-4 contact-form">
                                        <div className="line" />
                                        <small className="or text-center">OR</small>
                                        <div className='line' />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            type="text"
                                            name='name'
                                            placeholder='Write your Name'
                                            className='mb-3 contact-form'
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder='Write your Email'
                                            className='mb-3 contact-form'
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <textarea
                                            type="text"
                                            name='message'
                                            placeholder='Write your message'
                                            className='mb-3 contact-form'
                                            value={msg}
                                            onChange={(e) => {
                                                setMsg(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <button className='button' onClick={handleSubmit}>
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </Flash>

        </>
    )
}

export default Contacts

