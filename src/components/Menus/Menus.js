import React from 'react'
import './Menus.css'
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc"
import { Link } from 'react-scroll';
import { useState } from 'react'


const Menus = ({ toggle }) => {
    const [activeSection, setActiveSection] = useState('');
    const handleSetActive = (to) => {
        setActiveSection(to)
    };
    return (
        <>
            {toggle ? (
                <>
                    <div className="navbar-profile-pic">
                        <img src="profilepic.jpg" alt="Profile Pic" />
                    </div>
                    <div className="navbar-items">
                        <div className="navbar-item">

                            < Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => { handleSetActive('home') }}
                                onClick={() => handleSetActive('home')}
                            >
                                <div className={activeSection === 'home' ? "nav-link active" : "nav-link"}>
                                    <FcHome />Home
                                </div>
                            </Link>

                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('about')}
                                onClick={() => handleSetActive('about')}
                            >
                                <div className={activeSection === 'about' ? "nav-link active" : "nav-link"}>
                                    <FcAbout /> About
                                </div>
                            </Link>
                            <Link
                                to="education"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('education')}
                                onClick={() => handleSetActive('education')}
                            >
                                <div className={activeSection === 'education' ? "nav-link active" : "nav-link"}>
                                    <FcReadingEbook /> Education
                                </div>
                            </Link>


                            <Link
                                to="tech-stack"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('tech-stack')}
                                onClick={() => handleSetActive('tech-stack')}
                            >
                                <div className={activeSection === 'tech-stack' ? "nav-link active" : "nav-link"}>
                                    <FcBiotech />Tech Stack
                                </div>
                            </Link>


                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('projects')}
                                onClick={() => handleSetActive('projects')}
                            >

                                <div className={activeSection === 'projects' ? "nav-link active" : "nav-link"}>
                                    <FcVideoProjector /> Projects
                                </div>
                            </Link>

                            {/* <Link
                                to="testimonials"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                            >
                                <div className="nav-link">
                                    <FcVoicePresentation />Testimonials
                                </div>
                            </Link> */}

                            {/* <Link
                                to="work-experience"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                            >
                                <div className="nav-link">
                                    <FcPortraitMode />Work Experience
                                </div>
                            </Link> */}

                            <Link
                                to="contacts"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('contacts')}
                                onClick={() => handleSetActive('contacts')}
                            >
                                <div className={activeSection === 'contacts' ? "nav-link active" : "nav-link"}>
                                    <FcContacts />Contacts
                                </div>
                            </Link>

                        </div >
                    </div >
                </>
            ) : (
                <>
                    <div className="navbar-items">
                        <div className="navbar-item">

                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('projects')}
                                onClick={() => handleSetActive('home')}
                            >
                                <div className="nav-link">
                                    <FcHome title='Home' />
                                </div>
                            </Link>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('projects')}
                                onClick={() => handleSetActive('about')}
                            >
                                <div className="nav-link">
                                    <FcAbout title='About' />
                                </div>
                            </Link>
                            <Link
                                to="education"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('projects')}
                                onClick={() => handleSetActive('education')}
                            >
                                <div className="nav-link">
                                    <FcReadingEbook title='Education' />
                                </div>
                            </Link>
                            <Link
                                to="tech-stack"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('projects')}
                                onClick={() => handleSetActive('tech-stack')}
                            >
                                <div className="nav-link">
                                    <FcBiotech title='Tech Stack' />
                                </div>
                            </Link>
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('projects')}
                                onClick={() => handleSetActive('projects')}
                            >
                                <div className="nav-link">
                                    <FcVideoProjector title='Projects' />
                                </div>

                            </Link>
                            {/* <div className="nav-link">
                                <FcVoicePresentation title='Testimonials' />
                            </div> */}
                            {/* <div className="nav-link">
                                <FcPortraitMode title='Work Experience' />
                            </div> */}
                            <Link
                                to="contacts"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100}
                                // onSetActive={() => handleSetActive('projects')}
                                onClick={() => handleSetActive('contacts')}
                            >

                                <div className="nav-link">
                                    <FcContacts title='Contacts' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default Menus