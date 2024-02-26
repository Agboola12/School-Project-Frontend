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
            </div>


            <Footer />
        </div>
    )
}

export default Dashboard