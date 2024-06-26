import React from 'react'
import LandNavBar from './LandNavBar'
import { Link } from 'react-router-dom'
import { achievementContent, goalContent } from '../Content'
import Footer from './Footer'

const AboutUs = () => {
    return (
        <div>
            <LandNavBar />
            <div className='bg-light'>
                <div className='container p-5'>
                    <div className='row mt-5'>
                        <div className='col-lg-6'>
                            <h3>About Us</h3>
                        </div>
                        <div className='col-lg-6'>
                            <p>
                            The experience that has formative effect on the mind,
                             character or physical ability of an individual.
                              It is the most fundamental building blocks for human development. 
                            </p>
                        </div>
                    </div>
                    <div className='row mt-5'>
                         <div className='mb-5'>
                            <h2>Achivement</h2>
                            <p>
                            AU’s vision makes it a breed apart
                             and this it has vigorously pursued through infrastructural developments, teaching,
                              research, community development and international collaborations.
                            </p>
                         </div>
                         {achievementContent.map((item, index) => (
                            <div className='col-md-6'>
                                <div className=' p-5  shadow-sm  mb-5 bg-white rounded'>
                                    <Link to={item.link}>
                                        <p style={{ color: '#FF9500' }} className='text-left'><i class="  fa fa-crown"></i></p>
                                    </Link>
                                    <div className='card-title h4'>{item.header}</div>
                                    <div className='card-text'>
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='row mt-5'>
                         <div className='mb-5'>
                            <h2>Our Goal</h2>
                            <p>
                            Excellence and Character’


                            </p>
                         </div>
                         {goalContent.map((item, index) => (
                            <div className='col-md-6'>
                                <div className=' p-5  shadow-sm  mb-5 bg-white rounded'>
                                    <Link to={item.link}>
                                        <p style={{ color: '#FF9500' }} className='text-left'><i class="  fa fa-lightbulb"></i></p>
                                    </Link>
                                    <div className='card-title h4'>{item.header}</div>
                                    <div className='card-text'>
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='row mt-5 bg-white p-5'>
                            <div className='col-lg-9'>
                                    <p className='h1 fs-1 fw-bold'><span style={{ color: '#FF9500' }}>Together,</span>
                                     <span>let's shape the future </span>
                                    </p>
                                    <p>Join us on thia exciting learning journey and unlock your potential </p>
                            </div>
                            <div className='col-lg-1'>
                            <button className='btn btn text-white p-3 fw-bold mt-5 text-right mr-auto' style={{ backgroundColor: '#FF9500' }}>Join US</button>
                            </div>
                    </div>

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs