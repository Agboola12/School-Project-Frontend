import React, { useEffect, useState } from 'react'
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
// import videoimage from '../images/Container.png'
import neww from '../images/new01.jpg'
import teach from '../images/lectu.jpg'


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
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import BaseUrl from '../BaseUrl';
import axios from 'axios';
import avatar from '../images/avatar.jpeg'





const Home = () => {
    const [tab, setTab] = useState('yes')

    const navigate = useNavigate();
    const [isLoad, setIsLoad] = useState(false)


    const [users, setUser] = useState([])
    const [Testimony, setTestimony] = useState([])
    useEffect(() => {
        FetchData();
        FetchTestimony();
    }, [])

    const FetchData = () => {
        setIsLoad(true)
        axios.get(BaseUrl + 'getAll')
            .then(res => {
                setUser(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setIsLoad(false);
            });
    }

    const FetchTestimony = () => {
        setIsLoad(true)
        axios.get(BaseUrl + 'getTestimony')
            .then(res => {
                setTestimony(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setIsLoad(false);
            });
    }

    const handlePost = (_id) => {
        navigate("/tutordetails/?userId=" + _id)
    }
    return (
        <>
            <div >
                <LandNavBar/>
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
                                <h3>Take your next step</h3>
                                <p>
                                With a diverse academic plan that attracts students from across the world, Adeleke University aims to share with all those who are interested in an excellent college education that they deserve.
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

                    {/* lecturer */}
                    <div className='container mt-4'>
                        <div className='d-flex'>
                            <em className='text-left'>
                                <p className='fw-bold h3 mb-5'>Our Lecturers</p>
                            </em>
                            <Link to="/tutors" style={{ cursor: 'pointer' }} className='btn btn bg-white text-dark nav-link text-right fw-bold p-2 mt-3 ml-auto'>View All</Link>
                        </div>
                        {isLoad ? (
                            <div className='text-center d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
                                <div className='spinner-grow text-dark'></div>
                            </div>
                        ) : (
                            <div className='row'>
                                {users.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((user, index) => (
                                    <div key={index} className='col-lg-3 mr-5 shadow border border-black p-3 mx-auto text-center mb-5 rounded'>
                                        <div className='mb-3'>
                                            <img src={user.userImageUrl || avatar} alt='Profile' className='w-50' style={{ borderRadius: '20%' }} />
                                        </div>
                                        <div>
                                            <p className='fw-bold text-success'>{user.fullName}</p>
                                            <p className='fw-bold text-success'>{user.email}</p>
                                            <p>{user.department}</p>
                                            <button onClick={() => handlePost(user._id)} className='btn btn-outline-success'>View Profile</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>


                    {/* end */}
                    {/* our testimonies */}
                    <div className='container mt-6'>
                        <div className='d-flex'>
                            <em className='text-left'>
                                <h3>CAMPUS TOUR</h3>
                                <p><iframe class="elementor-video" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Adeleke University Campus TOUR" width="1300" height="360" src="https://www.youtube.com/embed/gR-O32fwZE4?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fadelekeuniversity.edu.ng&amp;widgetid=3" id="widget4"></iframe></p>
                            </em>
                            {/* <button className='btn btn bg-white text-dark fw-bold text-right mt-5 ml-auto'>View All</button> */}
                        </div>

                        <div className='row mt-5'>
                        {Testimony.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((post, index) => (

                            <div className='col-lg-5 mr-5  shadow-sm p-5 mx-auto  mb-5 bg-white rounded'>
                                <div className=''>
                                    <p>“ {post.message} ”</p>
                                    <div className='d-flex mt-4 mb-4'>
                                        <p className=' ml-auto  text-dark'>
                                            <p>{post.fullName}</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                                ))}
                        </div>
                    </div>



                </div>


                <Footer />

            </div>

        </>
    )
}

export default Home