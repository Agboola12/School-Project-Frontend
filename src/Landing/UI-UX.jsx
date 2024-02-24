import React from 'react'
import LandNavBar from './LandNavBar'
import Footer from './Footer'
import image from '../images/Container.png'
import { UIUXCourse } from '../Content'

const UIUX = () => {
  return (
    <div>
      <LandNavBar />
      <div className='bg-light'>
        <div className='container p-5'>
          <div className='row m-5'>
            <div className='col-lg-6'>
              <p className='h1'>UI/UX Course</p>
            </div>
            <div className='col-lg-6'>
              <p>
                Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX).
                Learn design principles, wireframing, prototyping, and usability testing techniques.
              </p>
            </div>
          </div>
          <div className='row'>
            <img src={image} alt='ihknk' />
          </div>

          <div className='row mt-4'>
             {UIUXCourse.map((item, index) => (
            <div className='col-lg-6'>
              <div className='p-5 shadow-sm mb-5 bg-white rounded'>
                <div className='card-text'>
                  <h2 className='text-right'>{item.number}</h2>
                </div>
                <div className='card-title h2'>{item.header}</div>
                <div className='card-title mt-3 pr-5 pl-5 pt-4 pb-4 shadow-sm border-light d-flex'>
                  <div>
                    <h6>{item.btn1}</h6>
                    <p>{item.btn1p}</p>
                  </div>
                   <button className='btn btn-light ml-auto'><i className='fa fa-clock'></i>{item.btn1time}</button>       
                </div>
                <div className='card-title mt-3 pr-5 pl-5 pt-4 pb-4 shadow-sm border-light d-flex'>
                  <div>
                    <h6>{item.btn2h6}</h6>
                    <p>{item.btn2p}</p>
                  </div>
                   <button className='btn btn-light ml-auto'><i className='fa fa-clock'></i>{item.btn2time}</button>       
                </div>
                <div className='card-title mt-3 pr-5 pl-5 pt-4 pb-4 shadow-sm border-light d-flex'>
                  <div>
                    <h6>{item.btn3h6}</h6>
                    <p>{item.btn3p}</p>
                  </div>
                   <button className='btn btn-light ml-auto'><i className='fa fa-clock'></i>{item.btn3time}</button>       
                </div>
              </div>
            </div>
                        ))} 


            
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default UIUX