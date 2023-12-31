import React from 'react'
import "./Contacts.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash'


const Contacts = () => {
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
                                            <FaLinkedin size={30} color='blue' className='ml-1 ms-2' />
                                            <FaGithub size={30} color='black' className='ml-1 ms-2' />
                                            <FaFacebook size={30} color='blue' className='ml-1 ms-2' />
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
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder='Write your Email'
                                            className='mb-3 contact-form'
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <textarea
                                            type="text"
                                            name='message'
                                            placeholder='Write your message'
                                            className='mb-3 contact-form'
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <button className='button' type='submit'>SEND MESSAGE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Flash>

        </>
    )
}

export default Contacts