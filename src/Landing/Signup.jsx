import React, { useState } from 'react'
import LandNavBar from './LandNavBar'
import Footer from './Footer'
import style from '../styles/LandNavBar.module.css'
import image from '../images/tes4.png'
import icon1 from '../icons/arrow-left (1).svg'
import icon2 from '../icons/arrow-right.svg'
import icon3 from '../icons/arrow-up-right.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from "yup";
import BaseUrl from '../BaseUrl'

const Signup = () => {
  const navigate = useNavigate();


  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  let lower = new RegExp(`(?=.*[a-z])`);
  let upper = new RegExp(`(?=.*[A-Z])`);
  let number = new RegExp(`(?=.*[0-9])`);
  let length = new RegExp(`(?=.{8,})`);
  const [isLoading, setIsLoading] = useState(false)
  const [Error, setError] = useState("");
  const [result, setResult] = useState({
    message: "",
    status: false
  })


  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      department: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {

      setIsLoading(true);
      axios.post(BaseUrl + "tutorRegister", values).then(
        res => {
          if (res.data.status) {
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
              resetForm();
            }, 3000);
          }
          navigate("/login")

        })
        .catch((err) => {
          console.error(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },

    validationSchema: yup.object({
      fullName: yup
        .string()
        .required("Fullname field is required")
        .min(3, "Must be greater than 5"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email field is required")
        .min(11, "Must be greater than 11")
        .test('is-gmail', 'Only Gmail accounts are allowed', function (value) {
          const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
          return gmailRegex.test(value);
        }),
        department: yup
        .string()
        .required("This field is required"),
      password: yup
        .string()
        .matches(lower, "Must include lowercase character")
        .matches(upper, "Must include uppercase character")
        .matches(number, "Must include number")
        .matches(length, "Must be atleast 8 character")
        .required("This field is required")
        .min(6, "Must be greater than 6"),
    }),
  });






  return (
    <>
      <LandNavBar />
      <div className='bg-light p-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 order-lg-2 ">
              <div className="signup-form p-5 mb-3 bg-white">
                <h2 className="text-center fw-bold">Sign Up</h2>
                <p>
                  <b className="text-danger">{Error}</b>
                </p>
                <div
                  className={`alert alert-${result.status ? 'success' : 'danger'} text-center text-${result.status ? 'success' : 'danger'
                    } d-${result.message ? 'block' : 'none'}`}>
                  {result.message}
                </div>
                <form action="#" method="post" onSubmit={formik.handleSubmit}>
                <p className="text-center">Create account to help many lives</p>
                <div className="form-group mt-4">
                  <label for="Full Name">Full Name</label>
                  <input
                    type="text"
                    className={
                      formik.errors.fullName
                        ? "form-control  is-invalid"
                        : "form-control d-grid col-12"
                    }
                    name="fullName"
                    placeholder="Enter your Full Name"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.fullName && (
                    <small className="text-danger">{formik.errors.fullName}</small>
                  )}
                  {/* <input type="text" className="form-control"  placeholder="Enter Your FullName"/> */}
                </div>
                <div className="form-group mt-4">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className={
                      formik.errors.email
                        ? "form-control is-invalid"
                        : "form-control d-grid col-12"
                    }
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && (
                    <small className="text-danger">{formik.errors.email}</small>
                  )}
                  {/* <input type="email" className="form-control  d-grid col-12" placeholder="Enter Your Email" /> */}
                </div>
                <div className="form-group mt-4">
                  <label for="Department">Department</label>
                  <input
                    type="text"
                    className={
                      formik.errors.department
                        ? "form-control is-invalid"
                        : "form-control d-grid col-12"
                    }
                    name="department"
                    placeholder="Enter Your Department"
                    onChange={formik.handleChange}
                    value={formik.values.department}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.department && (
                    <small className="text-danger">
                      {formik.errors.department}
                    </small>
                  )}
                  {/* <input type="text" name='Department' className="form-control  d-grid col-12" placeholder="Enter Your Department" /> */}
                </div>
                <div className="form-group mt-4">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className={
                      formik.errors.password
                        ? "form-control is-invalid"
                        : "form-control d-grid col-12"
                    }
                    name="password"
                    placeholder="Enter Your Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && (
                    <small className="text-danger">
                      {formik.errors.password}
                    </small>
                  )}
                  {/* <input type="password" className="form-control " required placeholder="Enter your Password"/> */}
                </div>
                <div className='form-check mt-4'>
                  <button type="submit" disabled={isLoading} className={`${style.container} btn btn-warning mt-3 fw-bold fs-4 d-grid gap-2 col-lg-12 p-2 mx-auto`}>
                    <b>
                      {isLoading ? "Loading..." : "Submit"}
                    </b>
                  </button>
                </div>
                </form>





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