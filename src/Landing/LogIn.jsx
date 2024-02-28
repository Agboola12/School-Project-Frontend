import React, { useRef, useState } from 'react'
import style from '../styles/LandNavBar.module.css'
import image from '../images/tes4.png'
import icon1 from '../icons/arrow-left (1).svg'
import icon2 from '../icons/arrow-right.svg'
import icon3 from '../icons/arrow-up-right.svg'
import google from '../icons/google-fill.png'
import LandNavBar from './LandNavBar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import BaseUrl from '../BaseUrl'
import axios from 'axios'

const LogIn = () => {

  const email = useRef();
  const password = useRef();
    const [Error, setError] = useState("");
    const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)


  const [result, setResult] = useState({
    message: "",
    status: false
  })

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value
    }
    setIsLoading(true);
    axios.post(BaseUrl + "tutorLogin", data).then
      (res => {
        if (res.data.status) {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard")
        }
        setResult({
          message: res.data.message,
          status: res.data.status
        })
        setTimeout(() => {
          setResult({
              message: "",
              status: false
          });
          setError("");
      }, 3000);
      }).catch(err => {
        console.log(err.message)
      })
      .finally(() => {
        setIsLoading(false);
      });

  }


  return (
    <>
      <LandNavBar />

      <div className='bg-light p-5'>
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-lg-6 order-lg-2 ">
              <div className="signup-form p-4 mb-3 bg-white p-5">
                <h2 className="text-center fw-bold">Login</h2>
                <p>
                  <b className="text-danger">{Error}</b>
                </p>
                <div
                  className={`alert alert-${result.status ? 'success' : 'danger'} text-center text-${result.status ? 'success' : 'danger'
                    } d-${result.message ? 'block' : 'none'}`}>
                  {result.message}
                </div>
                <form action="" method="post" enctype="multipart/form-data">
                  <p className="text-center">Welcome back! please log in to access your account</p>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" ref={email} className="form-control  d-grid col-12" required placeholder="Enter your Email" />
                  </div>
                  <div className="form-group mt-4">
                    <label for="password">Password</label>
                    <input type="password" ref={password} className="form-control " required placeholder="Enter your Password" />
                  </div>
                  <div className="form-check mt-3">
                    <button disabled={isLoading} name="submit" onClick={handleLogin} className={`${style.container} btn btn-warning h-75 p-1 fw-bold fs-4 d-grid gap-2 col-12 mx-auto`}>
                      <b>
                        {isLoading ? "LoggingIn..." : "Login"}
                      </b>
                    </button>
                  </div>
                </form>
                <hr></hr>
                <p className="text-center">Or </p>
                <div className="text-center">

                  <p className="btn btn-white text-black btn-light p-2 fw-bold">
                    <i className='fab fa-google text-danger mr-2'></i>
                    Sign Up with Google</p>
                </div>
                <div className="col-lg-12 order-lg-1 text-center m-4">
                  <p>Don't have an account?
                    <Link to="/register">Sign Up</Link>
                    <img src={icon3} alt="" />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1 align-self-center p-2">
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

export default LogIn