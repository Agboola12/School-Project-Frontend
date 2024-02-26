import React from 'react'
import TutorNavBar from './TeacherNavBar'
import Footer from '../Landing/Footer'
import style from '../styles/LandNavBar.module.css'


const Dashboard = () => {
    return (
        <div>
            <TutorNavBar />

            <div className="main-content">

                <div className="about-sect">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="grid-item inner-box grid-cover mb-5 " id={style.tutor} >
                                    <div className="overlay-hero"></div>
                                    <h2 className="text-white z-index "> Profile</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-section pb-5">
            <div class="container">
                <div class="col-lg-12">

                    <div class="mb-4">
                        <label for="image">
                            <input type="file" id="image" name="image" class="d-none" />
                            <div class="avatar-circle cursor-pointer rounded-circle mx-auto mb-2">
                                <img src="images/avatar-1.jpeg" class="img-fluid object-fit-cover object-position-center w-100 h-100">
                            </div>
                            <em>Change your photo</em>
                        </label>
                    </div>
                    
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="mb-0">Profile</h3>
                        <a href="#" class="text-dark">Edit Profile</a>
                    </div>

                    <form>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" placeholder="Mr" value="Mr" disabled> 
                                    <label>Title</label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" placeholder="Full name" value="Mariam Danjuman" disabled> 
                                    <label>Full name</label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" placeholder="Email address" value="mariam@hello.com" disabled>
                                    <label>Email address</label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" placeholder="Phone number" disabled value="9484739202">
                                    <label>Phone number</label>
                                </div>
                            </div>
                             <div class="col-lg-4">
                                <div class="form-floating mb-3">
                                    <input type="text" value="+444" class="form-control" placeholder="Postal code" disabled>
                                    <label>Postal code</label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-floating mb-3">
                                    <input type="text" value="45, liverpool street, UK" class="form-control" placeholder="Address" disabled>
                                    <label>Address</label>
                                </div>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <p class="mb-0"><label>Date of Birth</label></p>
                                <span>20/07/1980</span>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <p class="mb-0"><label>Gender</label></p>
                                <span>Male</span>
                            </div>
                             <div class="col-lg-4 mb-3">
                                <p class="mb-0"><label>Status</label></p>
                                <span class="badge text-bg-success">Member</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


            </div>


            <Footer />
        </div>
    )
}

export default Dashboard