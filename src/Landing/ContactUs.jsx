import React from 'react'
import LandNavBar from '../Landing/LandNavBar'
import Footer from '../Landing/Footer'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const ContactUs = () => {



  return (
    <div>
      <LandNavBar />
      <div className='bg-light'>


        <div className="container  p-5">
          <div className="row">
            <div className='col-lg-6 text-left'>
              <p className='h2'> Contact Us </p>
            </div>
            <div className='col-lg-6 text-right'>
              <p>
              Welcome to Adeleke University, Ede, where we offer one of the most affordable but best quality education in Nigeria,
               with unique features like, scholarship opportunities, flexibility in payment of fees, acquisition of entrepreneurial skills,
                high quality teaching, research and innovative learning.
              </p>
            </div>
          </div>

          {/* section 2  form*/}

          <div className="row bg-white p-5 mt-5">
            <div className="col-lg-8 p-3">

              <form>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="form-control" placeholder="Enter Firstname" name="email" />
                  </div>

                  <div className="col-lg-6">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter Lastname" name="pswd" />
                  </div>
                </div>

                <div className="row mt-3">

                  <div className="col-lg-6 ">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email" name="email" />
                  </div>

                  <div className="col-lg-6">
                    <label htmlFor=""> Phone</label>
                    <input type="text" className="form-control" placeholder="Enter Your Subject" name="email" />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className="col-lg-12">
                    <label htmlFor="">Subject</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number" name="pswd" />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <label htmlFor="">Message</label>
                    <textarea name="Message" id="" className='form-control' placeholder='Enter Your Message'></textarea>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-12 text-center'>
                <button className='btn btn fw-bold text-center text-white p-3 mt-5' style={{ backgroundColor: '#FF9500' }}>Send Your Message</button>
                  </div>
                </div>
              </form>

            </div>
            <div className="col-lg-4">
              <div className='bg-light p-3 text-center rounded-lg'> 
                <i className=' text-center mx-auto fa fa-envelope'></i>
                <p>admissions@adelekeuniversity.edu.ng</p>
              </div>

              <div className='bg-light p-3 mt-3 text-center rounded-sm'> 
                <i className='fa fa-phone'></i>              
                <p>+234 806 001 9561</p>
              </div>

              <div className='bg-light p-3 mt-3 text-center rounded-sm '>
                <i className='fa fa-location-dot'></i>
                <p>Some Where in the World</p>
              </div>

              <div className='bg-light mt-3 p-3 mx-auto text-center'>
                <i className='p-2 text-center mx-auto'><FaFacebook /></i>
                <i className='p-2 text-center mx-auto'><FaTwitter /></i>
                <i className='p-2 text-center mx-auto'><FaLinkedin /></i> <br/>
                   
                <p>Social Profiles</p>
              </div>

            </div>
          </div>
        </div>





      </div>

      <Footer />
    </div>
  )
}

export default ContactUs