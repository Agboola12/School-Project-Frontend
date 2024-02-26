import React from 'react'
import LandNavBar from './LandNavBar'
import teach from '../images/lectu.jpg'
import aderonke from '../videos/aderonke.mp4'


const Profile = () => {
    return (
        <div>
            <LandNavBar />


            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <img src={teach} alt='iod' className='w-50 rounded' />
                        <p><i className='fa fa-user'></i>Professor John Okafor</p>
                        <p><i className='fa fa-message'></i>JohnOkafor@gmail.com</p>
                        <p><i className='fa fa-location-dot'></i>Surrey, Canada</p>
                    </div>

                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body mt-3">
                                <div className="text-center">
                                    <button id="bttn" className="mr-3 fs-5 btn btn"> <i className="fa fa-flag text-light"></i></button>
                                    <button id="bttn" className="mr-3 fs-5 btn btn text-light"> Availability</button>
                                </div><br />
                                <div>
                                    <nav>
                                        <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link active" style={{ color: '#A10035' }} href="#about">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#photos">Photos</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#videos">Videos</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#song">Song List</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#genre">Genre</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <hr />
                                {/* About */}
                                <div>
                                    <h4 id="about" className="title">About</h4>
                                    <p> I am Professor Okafor, a passionate and talented young man with a deep love of teaching students.
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
                                <h4 id="videos" className="title">Videos</h4>
                                <div class="row">
                                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                        <video src={aderonke} controls class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>

                                        <video src={aderonke} controls class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Profile