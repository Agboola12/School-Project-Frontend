import React from 'react'
import TutorNavBar from './TeacherNavBar'
import style from '../styles/LandNavBar.module.css'
import Footer from '../Landing/Footer'

const Document = () => {
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

                <div className='container'>
                    <div className='row'>
                    <div className="col-lg-6 mb-lg-0 mb-4">
                        <form method="post" action="">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-floating mb-3">
                                        <input type='text' required className='form-control' />
                                        <label>Verification Code</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="text-center mt-4">
                                        <button type="submit" name="submit" className="btn btn-main-1 w-100 text-medium text-light rounded-0 py-3 px-4" style={{ backgroundColor: '#FF9500' }} >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className=' mx-auto text-center'>
                            <div style={{ height: '300px' }} className="overflow-auto bg-light p-lg-4 p-3 rounded">
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

export default Document