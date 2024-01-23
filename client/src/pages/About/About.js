import React from 'react'
import "./About.css"
import ParticlesBackground from '../../components/tsparticles/ParticlesBackground'
import Jump from 'react-reveal/Jump';
const About = () => {
    return (
        <>
            {/* <ParticlesBackground /> */}
            <Jump>
                <div className="about" id='about'>
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src="profilepic2.jpg" alt='Profile_Pic' />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About Me</h1>
                            <p>Hi, I'm Aayush Bhandari! I really enjoy making things on the internet.
                                I'm studying Computer Engineering and learning to create cool websites and apps.
                                Creating websites that people genuinely love is what I'm passionate about.
                                I aim to use technology to solve real-world problems and improve lives.
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    )
}

export default About