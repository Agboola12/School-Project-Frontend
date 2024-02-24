import React, { useState } from 'react'
import LandNavBar from './LandNavBar'
import icon from '../images/Icon.png';
import Abstract from '../images/Abstract.png';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import card5 from '../images/card5.png';
import card6 from '../images/card6.png';
import card7 from '../images/card7.png';
import videoimage from '../images/Container.png'

// import videoimage from '../images/videoimage.png';

import image1 from '../images/Image.png'
import image2 from '../images/Image2.png'
// import image3 from '../images/Image3.png'
import image4 from '../images/Image 4.png'
import image5 from '../images/Image 5.png'
import image6 from '../images/Image 6.png'
import test1 from '../images/tes1.png'
import test2 from '../images/tes2.png'
import test3 from '../images/tes3.png'
import test4 from '../images/tes4.png'
import { benefitContent } from '../Content';
import { Link } from 'react-router-dom';
import Footer from './Footer';




const Home = () => {
    const [tab, setTab] = useState('yes')
    return (
        <>
        <div >
            <LandNavBar />
            <div className="bg-light">


                <div className="container   text-center">
                    <div className="device pt-5">
                        <span > <img src={Abstract} className='me-5 ' /></span>
                        <span><img src={icon} className="" /></span>
                        <span className="unlock">Unlock</span> <span>Your Creative Potential</span>

                    </div>

                    <h2 className="text-center">
                        with Online Design and Development Courses.
                    </h2>
                    <smal >
                        Learn from Industry Experts and Enhance Your Skills.
                    </smal>
                </div>

                <div className="container px-4 text-center" >
                    <div className="row gx-5" >
                        <marquee behavior="scroll" direction="left" className=" mt-5 p-2" style={{ backgroundColor: 'white' }}>
                            <img src={card1} alt="" className="p-3 " />
                            <img src={card2} alt="" className="p-3" />
                            <img src={card3} alt="" className="p-3" />
                            <img src={card4} alt="" className="p-3" />
                            <img src={card5} alt="" className="p-3" />
                            <img src={card6} alt="" className="p-3" />
                            <img src={card7} alt="" className="p-3" />
                        </marquee>
                    </div>
                </div>
                <div className="container mt-5  ">
                    <img src={videoimage} alt="" className="w-100 mt-5" />
                </div>

                {/* benefits */}
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <h3>Benefits</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
                                elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
                                habitasse in velit fringilla feugiat senectus in.
                            </p>
                        </div>
                        <div className='col-lg-3 text-right'>
                            <button className='btn btn-white text-dark fw-bold text-right mt-5'>View All</button>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        {benefitContent.map((item, index) => (
                            <div className='col-md-4'>
                                <div className=' p-5  shadow-sm  mb-5 bg-white rounded'>
                                    <div className='card-text'>
                                        <h2 className='text-right'>{item.number}</h2>
                                    </div>
                                    <div className='card-title h4'>{item.header}</div>
                                    <div className='card-text'>
                                        {item.content}
                                    </div>
                                    <Link to={item.link}>
                                        <p style={{ color: '#FF9500' }} className='text-right'><i class="  fa fa-arrow-right"></i></p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*our courses  */}
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9 text-left'>
                            <h1>Our Courses</h1>
                            <p>          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
                                elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
                                habitasse in velit fringilla feugiat senectus in.</p>
                        </div>
                        <div className='col-lg-3 text-right '>
                            <button className='btn btn bg-white text-dark fw-bold text-right mt-5'>View All</button>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-5 mr-5  shadow-sm p-5 mx-auto  mb-5 bg-white rounded'>
                            <div className=''>
                                <img src={image1} alt='jkn' className='card-img-top' />
                                <div className='d-flex mt-4 mb-4'>
                                    <button className='btn btn-light bg-light mr-3 text-dark'>10 Weeks</button>
                                    <button className='btn btn-light bg-light ml-3 text-dark'>Intermediate</button>
                                    <p className='fw-bold ml-5'>By Micheal Adams</p>
                                </div>
                                <p className='h4'>Web Design Fundamentals</p>
                                <p>
                                    Learn the fundamentals of web design, including HTML, CSS, and
                                    responsive design principles. Develop the skills to create
                                    visually appealing and user-friendly websites.
                                </p>
                                <button className='btn btn bg-light w-100 fw-bold text-center text-dark'>Get it Now</button>
                            </div>
                        </div>
                        <div className='col-lg-5 ml-5 shadow-sm p-5  mx-auto mb-5 bg-white rounded'>
                            <div>
                                <img src={image2} alt='jkn' className='card-img-top' />
                                <div className='d-flex mt-4 mb-4'>
                                    <button className='btn btn-light bg-light mr-3 text-dark'>6 Weeks</button>
                                    <button className='btn btn-light bg-light ml-3 text-dark'>Intermediate</button>
                                    <p className='h4 fw-bold'>By Emily Johnson</p>
                                </div>
                                <p className='h4'>UI/UX Design</p>
                                <p>
                                    Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX).
                                    Learn design principles, wireframing, prototyping, and usability testing techniques.
                                </p>
                                <button className='btn btn bg-light w-100 fw-bold text-center text-dark'>Get it Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-5 mr-5  shadow-sm p-5 mx-auto  mb-5 bg-white rounded'>
                            <div className=''>
                                <img src={image4} alt='jkn' className='card-img-top' />
                                <div className='d-flex mt-4 mb-4'>
                                    <button className='btn btn-light bg-light mr-3 text-dark'>8 Weeks</button>
                                    <button className='btn btn-light bg-light ml-3 text-dark'>Mobile App Development</button>
                                    <p className='fw-bold ml-5'>By By David Brown</p>
                                </div>
                                <p className='h4'>Front-End Web Developement</p>
                                <p>
                                    Dive into the world of mobile app development. Learn to build native iOS and Android
                                    applications using industry-leading frameworks like Swift and Kotlin.

                                </p>
                                <button className='btn btn bg-light w-100 fw-bold text-center text-dark'>Get it Now</button>
                            </div>
                        </div>
                        <div className='col-lg-5 ml-5 shadow-sm p-5  mx-auto mb-5 bg-white rounded'>
                            <div>
                                <img src={image4} alt='jkn' className='card-img-top' />
                                <div className='d-flex mt-4 mb-4'>
                                    <button className='btn btn-light bg-light mr-3 text-dark'>10 Weeks</button>
                                    <button className='btn btn-light bg-light ml-3 text-dark'>Beginner</button>
                                    <p className='h4 fw-bold'>By Sarah Thompson</p>
                                </div>
                                <p className='h4' >Graphic Design for Beginners</p>
                                <p>
                                    Discover the fundamentals of graphic design, including typography, color theory, layout design,
                                    and image manipulation techniques. Create visually stunning designs for print and digital media.
                                </p>
                                <button className='btn btn bg-light w-100 fw-bold text-center text-dark'>Get it Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5 mr-5  shadow-sm p-5 mx-auto  mb-5 bg-white rounded'>
                            <div className=''>
                                <img src={image5} alt='jkn' className='card-img-top' />
                                <div className='d-flex mt-4 mb-4'>
                                    <button className='btn btn-light bg-light mr-3 text-dark'>10 Weeks</button>
                                    <button className='btn btn-light bg-light ml-3 text-dark'>Intermediate</button>
                                    <small className='fw-bold ml-5'>By Micheal Adams</small>
                                </div>
                                <p className='h4'>Front-End Web Developement</p>
                                <p>Become proficient in front-end web development. Learn HTML, CSS, JavaScript,
                                    and popular frameworks like Bootstrap and React. Build interactive and responsive websites.
                                </p>
                                <button className='btn btn bg-light w-100 fw-bold text-center text-dark'>Get it Now</button>
                            </div>
                        </div>
                        <div className='col-lg-5 ml-5 shadow-sm p-5  mx-auto mb-5 bg-white rounded'>
                            <div>
                                <img src={image6} alt='jkn' className='card-img-top' />
                                <div className='d-flex mt-4 mb-4'>
                                    <button className='btn btn-light bg-light mr-3 text-dark'>6 Weeks</button>
                                    <button className='btn btn-light bg-light ml-3 text-dark'>Advance</button>
                                    <p className='h4 fw-bold'>By Jennifer Wilson</p>
                                </div>
                                <p className='h4' >Advanced JavaScript</p>
                                <p>
                                    Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous
                                    programming, and ES6 features. Build complex applications with confidence.
                                </p>
                                <button className='btn btn bg-light w-100 fw-bold text-center text-dark'>Get it Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* our testimonies */}
                <div className='container mt-4'>
                    <div className='d-flex'>
                        <em className='text-left'>
                            <h3>Our Testimonials</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt  etiam eget elit id imperdiet et.
                                Cras eu sit dignissim <br />lorem nibh et. Ac cum eget habitasse  in velit fringilla feugiat senectus in.</p>
                        </em>
                        <button className='btn btn bg-white text-dark fw-bold text-right mt-5 ml-auto'>View All</button>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-lg-5 mr-5  shadow-sm p-5 mx-auto  mb-5 bg-white rounded'>
                            <div className=''>
                                <p>“ The web design course provided a solid foundation for me.
                                    The instructors were knowledgeable and supportive, and the interactive learning environment was engaging.
                                    I highly recommend it! ”</p>
                                <div className='d-flex mt-4 mb-4'>
                                    <p className=' mr-auto  text-dark'>
                                        <img src={test1} alt='kdnf' />
                                        <p>Sarah L</p>
                                    </p>
                                    <button className='btn btn bg-light text-dark fw-bold text-right ml-auto'>Read Full story</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 mr-5  shadow-sm p-5 mx-auto  mb-5 bg-white rounded'>
                            <div className=''>
                                <p>“The UI/UX design course exceeded my expectations. The instructor's expertise and
                                    practical assignments helped me improve my design skills. I feel more confident in my
                                    career now. Thank you!”
                                </p>
                                <div className='d-flex mt-4 mb-4'>
                                    <p className=' mr-auto  text-dark'>
                                        <img src={test2} alt='kdnf' />
                                        <p>Jason M</p>
                                    </p>
                                    <button className='btn btn bg-light text-dark fw-bold text-right ml-auto'>Read Full story</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-5   shadow-sm p-5 mx-auto mb-5 bg-white rounded-lg'>
                            <div className=''>
                                <p>
                                    “The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped
                                    me grasp the concepts easily. I'm now building my own app. Great course!”
                                </p>
                                <div className='d-flex mt-4 mb-4'>
                                    <p className=' mr-auto  text-dark'>
                                        <img src={test3} alt='kdnf' />
                                        <p>Emily K</p>
                                    </p>
                                    <button className='btn btn bg-light text-dark fw-bold text-right ml-auto'>Read Full story</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5   shadow-sm p-5 mx-auto mb-5 bg-white rounded-lg'>
                            <div className=''>
                                <p>
                                    “I enrolled in the graphic design course as a beginner, and it was the perfect starting
                                    point. The instructor's guidance and feedback improved my design abilities significantly.
                                    I'm grateful for this course!”
                                </p>
                                <div className='d-flex mt-4 mb-4'>
                                    <p className=' mr-auto  text-dark'>
                                        <img src={test4} alt='kdnf' />
                                        <p>Michael K</p>
                                    </p>
                                    <button className='btn btn bg-light text-dark fw-bold text-right ml-auto'>Read Full story</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Our Priicing   */}
                <div className='container '>
                    <div className='row'>
                        <div className=' col-lg-9 text-left'>
                            <h3>Our Pricing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.<br />
                                Cras eu sit dignissim lorem nibh et.sse  in velit fringilla.</p>
                        </div>
                        <div className='col-lg-2'>
                            <div className='d-flex flex-row bg-white p-3 '>
                                {['no', 'yes'].map((item, index) => (
                                    <div onClick={() => setTab(item)} key={index} className={`flex p-3 text-right text-dark fw-bold  mr-auto   ${item === tab ? 'bg-info' : ''}`}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='bg-white p-5'>
                        <div className='row'>
                            <div className='col-lg-5 bg-light p-5 mr-5 shadow-sm'>
                                <button className='btn btn  p-3 w-100 fw-bold text-center text-dark' style={{ backgroundColor: '#FFF9F0' }}>Free Plan</button>
                                <p className='text-center h2 fw-bold m-5'>$0/month</p>
                                <div className='bg-white p-5'>
                                    <p className=' h4 text-center '>Available Features</p>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5  '>Access to selected free courses.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>No certification upon completion.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>Ad-supported platform.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>Ad-supported platform.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>Access to exclusive Pro Plan community forums.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>Early access to new courses and updates.</button>

                                    <button className='btn btn w-100 fw-bold text-center text-white p-3 mt-5' style={{ backgroundColor: '#FF9500' }}>Get Started</button>
                                </div>
                            </div>
                            <div className='col-lg-5 bg-light p-5 mr-5 shadow-sm'>
                                <button className='btn btn  p-3 w-100 fw-bold text-center text-dark' style={{ backgroundColor: '#FFF9F0' }}>Free Plan</button>
                                <p className='text-center h2 fw-bold m-5'>$0/month</p>
                                <div className='bg-white p-5'>
                                    <p className=' h4 text-center '>Available Features</p>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5  '>Access to selected free courses.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>No certification upon completion.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>Ad-supported platform.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>Ad-supported platform.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>Access to exclusive Pro Plan community forums.</button>
                                    <button className='btn btn-outline-light text-dark w-100 mt-5 '>Early access to new courses and updates.</button>

                                    <button className='btn btn w-100 fw-bold text-center text-white p-3 mt-5' style={{ backgroundColor: '#FF9500' }}>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


            <Footer />

        </div>

        </>
    )
}

export default Home