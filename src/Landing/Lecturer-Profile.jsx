import React from 'react'
import LandNavBar from './LandNavBar'
import teach from '../images/lectu.jpg'


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


                </div>

            </div>
        </div>
    )
}

export default Profile