import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./MobileNav.css";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { Link } from "react-scroll";
import { useState } from "react";
const MobileNav = ({ activeNavbar }) => {
    // for show and hide navbar
    const [open, setOpen] = useState(false);
    // for open
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuClick = () => {
        setOpen(false)
    }

    const [activeSection, setActiveSection] = useState("");
    const handleSetActive = (to) => {
        setActiveSection(to);
    };
    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (
                        <IoMdClose
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    ) : (
                        <GiHamburgerMenu
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    )}

                    <span className="mobile-nav-title">My Portfolio App</span>
                </div>
                {open && (
                    <div className="mobile-nav-menu">
                        <div className="navbar-items">
                            <div className="navbar-item">
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onSetActive={() => {
                                        handleSetActive("home");
                                    }}
                                    onClick={() => {
                                        handleSetActive("home");
                                        handleMenuClick();
                                    }
                                    }
                                >
                                    <div
                                        className={
                                            activeSection === "home" ? "nav-link active" : "nav-link"
                                        }
                                    >
                                        <FcHome />
                                        Home
                                    </div>
                                </Link>

                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onSetActive={() => handleSetActive("about")}
                                    onClick={() => {
                                        handleSetActive("about");
                                        handleMenuClick();
                                    }}
                                >
                                    <div
                                        className={
                                            activeSection === "about" ? "nav-link active" : "nav-link"
                                        }
                                    >
                                        <FcAbout /> About
                                    </div>
                                </Link>
                                <Link
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onSetActive={() => handleSetActive("education")}
                                    onClick={() => {
                                        handleSetActive("education")
                                        handleMenuClick();
                                    }}
                                >
                                    <div
                                        className={
                                            activeSection === "education"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >
                                        <FcReadingEbook /> Education
                                    </div>
                                </Link>

                                <Link
                                    to="tech-stack"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onSetActive={() => handleSetActive("tech-stack")}
                                    onClick={() => {
                                        handleSetActive("tech-stack");
                                        handleMenuClick();
                                    }}
                                >
                                    <div
                                        className={
                                            activeSection === "tech-stack"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >
                                        <FcBiotech />
                                        Tech Stack
                                    </div>
                                </Link>

                                <Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onSetActive={() => handleSetActive("projects")}
                                    onClick={() => {
                                        handleSetActive("projects")
                                        handleMenuClick();
                                    }}
                                >
                                    <div
                                        className={
                                            activeSection === "projects"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >
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
                                    offset={-500}
                                    duration={100}
                                    onSetActive={() => handleSetActive("contacts")}
                                    onClick={() => {
                                        handleSetActive("contacts")
                                        handleMenuClick();
                                    }}
                                >
                                    <div
                                        className={
                                            activeSection === "contacts"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >
                                        <FcContacts />
                                        Contacts
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
};

export default MobileNav;
