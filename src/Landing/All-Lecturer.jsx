import React from 'react'
import LandNavBar from './LandNavBar'
import { Link } from 'react-router-dom'
import teach from '../images/lectu.jpg'


const AllLecturer = () => {
    
    return (
        <div>
            <LandNavBar />

            <div className='container mt-4'>
                <p className='fw-bold h3 text-center mt-5 mb-5'>Our Lecturers</p>
                <div className='row '>
                    <div className='col-lg-3 mr-5 shadow border border-black p-3 mx-auto text-center  mb-5 rounded'>
                        <div className='mb-3'>
                            <img src={teach} alt='iod' className='w-50' style={{ borderRadius: '20%' }} />
                        </div>
                        <div>
                            <p className='fw-bold'>Professor Adebite Hope</p>
                            <p>Physics and Mathematics</p>
                            <p>1,240 Student Tutored</p>
                            <Link to='/lecturer-details' className='btn btn-outline-success'>View More</Link>

                        </div>
                    </div>
                    <div className='col-lg-3 mr-5 shadow border border-black p-3 mx-auto text-center  mb-5 rounded'>
                        <div className='mb-3'>
                            <img src={teach} alt='iod' className='w-50' style={{ borderRadius: '20%' }} />
                        </div>
                        <div>
                            <p className='fw-bold'>Professor Adebite Hope</p>
                            <p>Physics and Mathematics</p>
                            <p>1,240 Student Tutored</p>
                            <Link to='/lecturer-details' className='btn btn-outline-success'>View More</Link>
                        </div>

                    </div>
                    <div className='col-lg-3 mr-5 shadow border border-black p-3 mx-auto text-center  mb-5 rounded'>
                        <div className='mb-3'>
                            <img src={teach} alt='iod' className='w-50' style={{ borderRadius: '20%' }} />
                        </div>
                        <div>
                            <p className='fw-bold'>Professor Adebite Hope</p>
                            <p>Physics and Mathematics</p>
                            <p>1,240 Student Tutored</p>
                            <button className='btn btn-outline-success'>View More</button>
                        </div>
                    </div>
                </div>

                <div className='row '>
                    <div className='col-lg-3 mr-5 shadow border border-black p-3  mx-auto text-center  mb-5 rounded'>
                        <div className='mb-3'>
                            <img src={teach} alt='iod' className='w-50' style={{ borderRadius: '20%' }} />
                        </div>
                        <div>
                            <p className='fw-bold'>Professor Adebite Hope</p>
                            <p>Physics and Mathematics</p>
                            <p>1,240 Student Tutored</p>
                            <button className='btn btn-outline-success'>View More</button>
                        </div>
                    </div>
                    <div className='col-lg-3 mr-5 shadow border border-black p-3  mx-auto text-center  mb-5 rounded'>
                        <div className='mb-3'>
                            <img src={teach} alt='iod' className='w-50' style={{ borderRadius: '20%' }} />
                        </div>
                        <div>
                            <p className='fw-bold'>Professor Adebite Hope</p>
                            <p>Physics and Mathematics</p>
                            <p>1,240 Student Tutored</p>
                            <button className='btn btn-outline-success'>View More</button>
                        </div>

                    </div>
                    <div className='col-lg-3 mr-5 shadow border border-black p-3  mx-auto text-center  mb-5 rounded'>
                        <div className='mb-3'>
                            <img src={teach} alt='iod' className='w-50' style={{ borderRadius: '20%' }} />
                        </div>
                        <div>
                            <p className='fw-bold'>Professor Adebite Hope</p>
                            <p>Physics and Mathematics</p>
                            <p>1,240 Student Tutored</p>
                            <button className='btn btn-outline-success'>View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllLecturer