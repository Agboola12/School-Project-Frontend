import React from 'react'
import LandNavBar from './LandNavBar'
import Footer from './Footer'
import style from '../styles/LandNavBar.module.css'
import image from '../images/tes4.png'
import icon1 from '../icons/arrow-left (1).svg'
import icon2 from '../icons/arrow-right.svg'
import icon3 from '../icons/arrow-up-right.svg'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <LandNavBar />
      <div className='bg-light p-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 order-lg-2 ">
              <div className="signup-form p-5 mb-3 bg-white">
                <h2 className="text-center fw-bold">Sign Up</h2>
                {/* <form action="#" method="post"> */}
                  <p className="text-center">Create account to help many lives</p>
                  <div className="form-group mt-4">
                    <label for="username">Full Name</label>
                    <input type="text" className="form-control "  placeholder="Enter Your FullName"/>
                  </div>
                  <div className="form-group mt-4">
                    <label for="email">Email</label>
                    <input type="email" className="form-control  d-grid col-12"  placeholder="Enter Your Email"/>
                  </div>
                  <div className="form-group mt-4">
                    <label for="email">Department</label>
                    <input type="text" name='Department' className="form-control  d-grid col-12"  placeholder="Enter Your Department"/>
                  </div>
                  <div className="form-group mt-4">
                    <label for="password">Password</label>
                    <input type="password" className="form-control " required placeholder="Enter your Password"></input>
                  </div>
                  <div className='form-check mt-4'>
                    <button type="submit" className={`${style.container} btn btn-warning mt-3 fw-bold fs-4 d-grid gap-2 col-lg-12 p-2 mx-auto`}>
                      Sign Up
                    </button>
                  </div>
                {/* </form> */}





                <hr className='mt-4' />
                <p className="text-center">Or</p>
                <div className="text-center">
                  <p className="btn btn-white text-black btn-light p-3"> <i className='fab fa-google mr-2'></i> Sign Up with Google</p>
                </div>
                <div className="col-lg-12 order-lg-1 text-center m-4">
                  <p>Already have an account?
                    <Link to="/login">Login in</Link>
                    <img src={icon3} alt="" />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1 align-self-center">
              <h2 className="">Student Testimonials</h2>
              <p>orem ipsum, dolor sit amet consectetur adipisicing elit. <br></br>Quam, nulla quae architecto voluptatem omnis voluptates similique facilis</p>
              <br></br> <br></br>
              <div className="card bg" >
                <div className="card-body">
                  <p className="card-title">The web design course provide solid foundation for me. The instructor <br></br> were knowledgeable and supportive and interesting learning.</p>
                  <p className="card-text">environment was ongoing. I highly recommend it</p>
                  <div className="d-flex justify-content-between ">
                    <div>
                      <img src={image} alt="" />
                      <p className="btn btn-light mr-4 justify-content-start">Sarah L</p>

                    </div>
                    <div>
                      <button className="btn btn-light">Read Full Story</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn btn-light d-flex justify-content-end col-lg-12 m-4">
                <div>
                  <img src={icon1} alt="" className="btn btn-light" />
                </div>
                <div>
                  <img src={icon2} alt="" className="btn btn-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Signup