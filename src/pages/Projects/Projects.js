import React from 'react'
import "./Projects.css"
const Projects = () => {
    return (
        <>
            <div className="container projects">
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top Recent Projects</h2>
                <hr />
                <p className='pb-3 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, similique enim error alias assumenda dolores reprehenderit laborum quas, perferendis repellat dolorum, quae nam dolor sapiente in ipsa. Deleniti tempora assumenda, nobis excepturi hic aliquid a quidem quasi quia quaerat beatae non, blanditiis nesciunt reiciendis adipisci sequi consectetur? Ex, cum quo?
                </p>
                <div className="row" id='ads'>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className='card-notify-badge'>Full Stack</span>
                                <img src='https://nickjanetakis.com/assets/blog/cards/how-to-start-and-finish-any-web-app-project-678900795cfd6d4fa60e3655dd62ae9f61ef5e14b62ca62050e817e43e861f11.jpg' alt='Project1' />
                            </div>
                            <div className="card-image-overly m-auto mt-4">
                                <span className="card-detail-badge">Node Js</span>
                                <span className="card-detail-badge">Express Js</span>
                                <span className="card-detail-badge">React Js</span>
                                <span className="card-detail-badge">MongodbSS</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">
                                        (First Project Name)
                                    </h5>
                                </div>
                                <a href='' className='ad-btn'>View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className='card-notify-badge'>Full Stack</span>
                                <img src='https://nickjanetakis.com/assets/blog/cards/how-to-start-and-finish-any-web-app-project-678900795cfd6d4fa60e3655dd62ae9f61ef5e14b62ca62050e817e43e861f11.jpg' alt='Project1' />
                            </div>
                            <div className="card-image-overly m-auto mt-4">
                                <span className="card-detail-badge">Node Js</span>
                                <span className="card-detail-badge">Express Js</span>
                                <span className="card-detail-badge">React Js</span>
                                <span className="card-detail-badge">MongodbSS</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">
                                        (First Project Name)
                                    </h5>
                                </div>
                                <a href='' className='ad-btn'>View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className='card-notify-badge'>Full Stack</span>
                                <img src='https://nickjanetakis.com/assets/blog/cards/how-to-start-and-finish-any-web-app-project-678900795cfd6d4fa60e3655dd62ae9f61ef5e14b62ca62050e817e43e861f11.jpg' alt='Project1' />
                            </div>
                            <div className="card-image-overly m-auto mt-4">
                                <span className="card-detail-badge">Node Js</span>
                                <span className="card-detail-badge">Express Js</span>
                                <span className="card-detail-badge">React Js</span>
                                <span className="card-detail-badge">MongodbSS</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">
                                        (First Project Name)
                                    </h5>
                                </div>
                                <a href='' className='ad-btn'>View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects