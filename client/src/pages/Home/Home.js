import React from 'react'
import './home.css'
import { useTheme } from '../../context/ThemeContext'
import Typewriter from 'typewriter-effect'
import Resume from '../../assets/resume.pdf' // Replace this with your resume file
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { Fade } from 'react-reveal'

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((previousTheme) => (previousTheme) === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? (<BsFillMoonStarsFill size={30} />) : (<IoIosSunny size={30} />)}
        </div>
        <div className="container home-content">
          <Fade top>
            <h2>Hi, I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ['Web Developer !', 'MERN Stack Developer !'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className='home-buttons'>
              <a
                className='btn btn-hire'
                href="https://api.whatsapp.com/send?phone=9765440712"
                rel='noreferrer'
                target='_blank'
              >
                Hire Me
              </a>
              <a className='btn btn-cv' href={Resume} download="Aayush.pdf">My Resume</a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home