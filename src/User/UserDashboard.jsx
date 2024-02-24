import React from 'react'
import UserNavBar from './UserNavBar'
import profile from "../images/00.jpeg"
import tes1 from "../images/tes1.png"
import Footer from '../Landing/Footer'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div>
        <UserNavBar/>

        

        <div className="main-content">

        <div className="welcome-sect">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-4">
                            <div className="overlay-hero"></div>
                            <h2 className="text-dark z-index-1 text-center">Welcome, John</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="info-section pb-5">
            <div className="container">
                <div className="col-lg-12">

                    <div className="mb-4">
                        <label for="image">
                            <input type="file" id="image" name="image" className="d-none" />
                            <div className="avatar-circle cursor-pointer rounded-circle mx-auto mb-2">
                                <img src={tes1} className="img-fluid object-fit-cover object-position-center w-100 h-100"/>
                            </div>
                            <em>Change your photo</em>
                        </label>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">Profile</h3>
                        <Link to="" className="text-dark">Edit Profile</Link>
                    </div>

                    <form>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Mr" value="Mr" disabled/> 
                                    <label>Title</label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Full name" value="Mariam Danjuman" disabled/> 
                                    <label>Full name</label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" placeholder="Email address" value="mariam@hello.com" disabled/>
                                    <label>Email address</label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Phone number" disabled value="9484739202"/>
                                    <label>Phone number</label>
                                </div>
                            </div>
                             <div className="col-lg-4">
                                <div className="form-floating mb-3">
                                    <input type="text" value="+444" className="form-control" placeholder="Postal code" disabled/>
                                    <label>Postal code</label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-floating mb-3">
                                    <input type="text" value="45, liverpool street, UK" className="form-control" placeholder="Address" disabled/>
                                    <label>Address</label>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <p className="mb-0"><label>Date of Birth</label></p>
                                <span>20/07/1980</span>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <p className="mb-0"><label>Gender</label></p>
                                <span>Male</span>
                            </div>
                             <div className="col-lg-4 mb-3">
                                <p className="mb-0"><label>Status</label></p>
                                <span className="badge text-bg-success">Member</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

                <Footer/>
    </div>
  )
}

export default UserDashboard