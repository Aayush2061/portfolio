import React from 'react'
import "./Education.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosSchool } from "react-icons/io";

const Education = () => {
    return (
        <>
            <div className='education' id='education'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid gray' }}
                        date="2026(expected)"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<IoIosSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor's in Computer Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">IOE Pulchowk Campus, Nepal</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education