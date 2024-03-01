import React, { useRef, useState } from 'react'
import style from '../styles/LandNavBar.module.css'
import LandNavBar from './LandNavBar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import BaseUrl from '../BaseUrl'
import axios from 'axios'

const ForgottenPassword = () => {

    const navigate = useNavigate();
    const email = useRef();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState({
        message: "",
        status: false
    })

    const HandleForgotten = (e)=>{
        e.preventDefault(e);
        setIsLoading(true);

        axios.post(BaseUrl + 'forgottenPassword', {email: email.current.value})
        .then((res)=>{
            if(res.data.status){
                navigate(`/confirmPassword?email=${email.current.value}`)
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
        .catch((err)=>{
            console.log(err);
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
                            <div className=" p-4 mb-5 bg-white p-5">
                                <h2 className="text-center fw-bold">Forgotten Password</h2>
                                <p>
                                    <b className="text-danger">{error}</b>
                                </p>
                                <div
                                    className={`alert alert-${result.status ? 'success' : 'danger'} text-center text-${result.status ? 'success' : 'danger'
                                        } d-${result.message ? 'block' : 'none'}`}>
                                    {result.message}
                                </div>
                                <form action="" method="post" enctype="multipart/form-data" onSubmit={HandleForgotten} className='mt-5'>
                                    <div className="form-group">
                                        <input type="email" ref={email} className="form-control  d-grid col-12" required placeholder="Enter your Email" />
                                    </div>
                                    <div className="form-check mt-5">
                                        <button disabled={isLoading} name="submit" className={`${style.container} btn btn-warning h-75 p-2 fw-bold fs-4 d-grid gap-2 col-12 mx-auto`}>
                                            <b>
                                                {isLoading ? "Loading..." : "Submit"}
                                            </b>
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center mt-4">
                                    <Link to="/login" className="btn btn-white text-black btn-light p-3 fw-bold">
                                        Back to Login
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

export default ForgottenPassword