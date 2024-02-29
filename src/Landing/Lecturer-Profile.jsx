import React, { useEffect, useState } from 'react'
import LandNavBar from './LandNavBar'
import aderonke from '../videos/aderonke.mp4'
import Footer from './Footer'
import { useSearchParams } from 'react-router-dom'
import BaseUrl from '../BaseUrl'
import axios from 'axios'
import avatar from '../images/avatar.jpeg'



const Profile = () => {

    const [tutor, setTutor] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        FetchData();
    }, [])

    const FetchData = () => {
        setIsLoading(true);

        axios.get(BaseUrl + `tutorDetails/${searchParams.get('userId')}`)
            .then(res => {
                if (res.data.status) {
                    setTutor(res.data.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    return (
        <div>
            <LandNavBar />


            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-4 text-center mx-auto'>
                        <img src={tutor.userImageUrl || avatar} alt='iod' className='w-50 rounded' />
                        <p><i className='fa fa-user'></i>{tutor.fullName}</p>
                        <p><i className='fa fa-message'></i>{tutor.email}</p>
                    </div>

                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body mt-3">
                                <div className="text-center">
                                    <button id="bttn" className=" fs-5 btn btn"> <i className="fa fa-flag" style={{color:'#FF9500'}} ></i></button>
                                    <button id="bttn" className=" fs-5 btn btn text-dark"> Availability</button>
                                </div><br />
                                <div>
                                    <nav>
                                        <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link active" style={{ color: '#A10035' }} href="#about">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#Document">Document</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <hr />
                                {/* About */}
                                <div>
                                    <h4 id="about" className="title">About</h4>
                                    <p> I am {tutor.fullName}, a passionate and talented young man with a deep love of teaching students.
                                        Growing up in a teaching family, I began to teach at a young age, and ever since, I have dedicated myself to
                                        helping students learn and grow. My teaching philosophy is centered on creating engaging and interactive
                                        learning experiences that inspire curiosity and foster critical thinking skills. Outside of the classroom,
                                        I enjoy exploring new teaching methodologies and technologies to enhance the learning experience for my
                                        students.
                                    </p>
                                </div>
                            </div>
                            {/* Videos */}
                            <hr />
                            <div>
                                <h4 id="Document" className="title">Documents</h4>
                                <div className='row'>
                                    <div className='col-lg-3 shadow-sm bg-light p-5'>
                                        <input type="file"  accept=".pdf,.doc,.docx" />
                                 </div>
                                    <div className='col-lg-3 shadow-sm bg-light p-5'>
                                        <input type="file"  accept=".pdf,.doc,.docx" />
                                 </div>
                                    <div className='col-lg-3 shadow-sm bg-light p-5'>
                                        <input type="file"  accept=".pdf,.doc,.docx" />
                                 </div>
                                </div>

                            </div>
                            <hr/>
                            <div>
                                <h4 id="videos">Videos</h4>
                                <div className="row">
                                    <div className="col-lg-4 ">
                                        <video src={aderonke} controls className="w-100 h-50 shadow-1-strong rounded " alt="Boat on Calm Water"></video>
                                    </div>
                                    <div className="col-lg-4 ">
                                        <video src={aderonke} controls className="w-100 h-50 shadow-1-strong rounded " alt="Boat on Calm Water"></video>
                                    </div>
                                    <div className="col-lg-4 ">
                                        <video src={aderonke} controls className="w-100 h-50 shadow-1-strong rounded " alt="Boat on Calm Water"></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Profile