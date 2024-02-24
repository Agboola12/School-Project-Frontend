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
import neww from '../images/new01.jpg'


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
                        <span className="unlock fs-5">Free your mind.</span>

                    </div>
                    <h3 className="text-center">
                     Meditation is the foundation of any creative practice.
                    </h3>
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
                    <img src={neww} alt="" className="w-100 mt-5" />
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



            </div>


            <Footer />

        </div>

        </>
    )
}

export default Home