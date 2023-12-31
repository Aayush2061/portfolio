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
                            <img src="profilepic.jpg" alt='Profile_Pic' />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About Me</h1>
                            <p>Lorem ipsum dolor sit ametatum dolor ut, quia magni reprehenderit dolorum voluptatibus porro fuga. Eos enim maiores in molestias soluta, assumenda voluptatem neque? Quibusdam, ducimus nihil reprehenderit esse nulla cumque possimus cum totam, accusamus harum, nostrum aut provident distinctio inventore consequuntur laudantium delectus! Deleniti incidunt quibusdam rem alias dignissimos deserunt impedit sunt repellendus mollitia. Similique quasi aut atque commodi recusandae minima distinctio tempore laborum cumque sint necessitatibus et provident veniam, molestiae neque ipsam. Culpa ipsam quia possimus aspernatur sapiente, impedit, asperiores iste accusantium quam quaerat vitae voluptatem distinctio maxime nostrum dignissimos saepe temporibus ut nemo. Molestias enim praesentium laudantium vel nostrum distinctio exercitationem! Explicabo velit culpa odit quidem. Id explicabo nobis officia amet aperiam expedita doloremque corrupti mollitia, perferendis animi, beatae, at aspernatur ut officiis? Animi cupiditate libero eaque! Sed vitae asperiores minus, incidunt porro nostrum aliquid fugiat id!</p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    )
}

export default About