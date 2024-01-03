import React from 'react'
import "./TechStack.css"
import { TechStackList } from '../../utils/TechstackList'
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade'
const Techstack = () => {
    return (
        <>
            <div className="container techstack" id='tech-stack'>
                <Jump>
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technologies Stack</h2>
                    <hr />
                    <p className='pb-3 text-center'>👉 including programming Languages, frameworks, databases, front-end and backend tools, and APIs</p>
                </Jump>
                <div className="row">
                    {TechStackList.map((tech) => (
                        <Fade key={tech._id} left>
                            <div className='col-md-3'>
                                <div className="card mt-2">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex justify-content-center">
                                                <div className="align-self-center">
                                                    <tech.icon className='tech-icon' />
                                                </div>
                                                <div className="media-body">
                                                    <h5>{tech.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Techstack