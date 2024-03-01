import React, { useEffect, useRef, useState } from 'react'
import style from '../styles/LandNavBar.module.css'
import LandNavBar from './LandNavBar'
import Footer from './Footer'
import axios from 'axios'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import BaseUrl from '../BaseUrl'


const ComfirmPassword = () => {

    const [searchParams] = useSearchParams();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [isLoad, setLoad] = useState(true)

    const email = searchParams.get('email');

    const otpCode = useRef();
    const newPassword = useRef();
    const confirmPassword = useRef();

    const [result, setResult] = useState({
        message: "",
        status: false
    })

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoad(false); 
        }, 4000);
    
        return () => clearTimeout(timer);
      }, []);
    

    const resetPassword = (e) => {
        e.preventDefault();

        if (!otpCode.current.value || !newPassword.current.value || !confirmPassword.current.value) {
            setError("All fields are required");
            return;
        }

        if (newPassword.current.value !== confirmPassword.current.value) {
            setError("Passwords do not match");
            return;
        }

        setIsLoading(true);

        const info = {
            otpCode: otpCode.current.value,
            newPassword: newPassword.current.value,
            email
        };

        axios.post(BaseUrl + 'resetPassword', info)
            .then((res) => {
                if (res.data.status) {
                    navigate('/Login');
                }
                setResult({
                    message: res.data.message,
                    status: res.data.status,
                });
                setTimeout(() => {
                    setResult({
                        message: "",
                        status: false,
                    });
                    setError("");
                }, 3000);
            })
            .catch((err) => {
                console.log(err);
                setError("An error occurred while resetting password");
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
                        <div className="col-lg-7 ">
                            <div className=" p-4 mb-3 bg-white p-5">
                                <h2 className="text-center fw-bold">Reset Password</h2>
                                <p>
                                    {isLoad && (
                                        <div className='alert alert-warning text-black text-center'>
                                            <p>Check your email for the OTP code </p>
                                        </div>
                                    )}
                                    <b className="text-danger">{error}</b>
                                </p>
                                <div
                                    className={`alert alert-${result.status ? 'success' : 'danger'} text-center text-${result.status ? 'success' : 'danger'
                                        } d-${result.message ? 'block' : 'none'}`}>
                                    {result.message}
                                </div>
                                <form onSubmit={resetPassword}>
                                    <div className="form-group">
                                        <label for="password">OTP Code</label>
                                        <input type="number" ref={otpCode} className="form-control  d-grid col-12" required placeholder="Enter your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password">New Password</label>
                                        <input type="password" ref={newPassword} className="form-control  d-grid col-12" required placeholder="Enter your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Confirm Password</label>
                                        <input type="password" ref={confirmPassword} className="form-control  d-grid col-12" required placeholder="Enter your Email" />
                                    </div>
                                    <div className="form-check mt-3">
                                        <button disabled={isLoading} name="submit" className={`${style.container} btn btn-warning h-75 p-2 fw-bold fs-4 d-grid gap-2 col-12 mx-auto`}>
                                            <b>
                                                {isLoading ? "Loading..." : "Submit"}
                                            </b>
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center mt-3">
                                    <Link to="/login" className="btn btn-white text-black btn-light p-3 fw-bold">
                                        Remember password -  Back to Login
                                    </Link>
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

export default ComfirmPassword