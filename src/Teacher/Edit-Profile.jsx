import React, { useEffect, useRef, useState } from 'react'
import style from '../styles/LandNavBar.module.css'
import avatar from '../images/avatar.jpeg'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import BaseUrl from '../BaseUrl'
import TutorNavBar from './TeacherNavBar'
import { setAdmin } from '../Slices/adminSlices';
import Footer from '../Landing/Footer';

const EditProfile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        department: "",
    })

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
        axios.get(BaseUrl + "getTutor")
            .then(res => {
                if (res.data.status) {
                    setUser(res.data.data)
                }
                const result = res.data.message;
                toast.success(result, {
                    autoClose: 3000,
                });
            })
            .catch((err) => {
                const error = err.response?.data?.message || 'An error occurred';
                toast.error(error, {
                    autoClose: 3000,
                });
                console.error(err.message);
            })
    }

    const inputIsChanging = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (_id) => {
        setIsLoading(true);
        axios.patch(BaseUrl + `editTutor/${_id}`, user)
            .then(res => {
                if (res.data.status) {
                    // console.log(res);
                    const result = res.data.message;
                    toast.success(result, {
                        autoClose: 3000,
                    })
                }
                navigate("/dashboard")
            })
            .catch((err) => {
                const error = err.response?.data?.message || 'An error occurred';
                toast.error(error, {
                    autoClose: 3000,
                });
                console.error(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    const dispatch = useDispatch();
    const { loginAdmin: loginUser } = useSelector((state) => state.admin);

    const userImageUrl = useRef()


    const handleImage = () => {
        const data = new FormData();
        data.append("userImageUrl", userImageUrl.current.files[0])

        axios.patch(BaseUrl + `tutorImage/${loginUser._id}`, data)
            .then((res) => {
                if (res.data.status) {
                    axios.get(BaseUrl + "getTutor").then(res => {
                        if (res.data.status) {
                            dispatch(setAdmin(res.data.data));
                        }
                    })
                }
                const result = res.data.message;
                toast.success(result, {
                    autoClose: 3000,
                })
            })
            .catch((err) => {
                const error = err.response?.data?.message || 'An error occurred';
                toast.error(error, {
                    autoClose: 3000,
                });
                console.error(err.message);
            })
    }



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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info-section pb-5">
                    <div className="container">
                        <div className="col-lg-12">

                        <div className="mb-4">
                                <label for="image">
                                    <input type="file" onChange={handleImage} ref={userImageUrl} className="" />
                                    <div className="avatar-circle cursor-pointer rounded-circle mx-auto mb-2">
                                        <img src={user?.userImageUrl || avatar} alt='sjnd' 
                                        className="img-fluid object-fit-cover object-position-center w-25 h-25" style={{borderRadius:'50px'}}/>
                                    </div>
                                    <em>Change your photo </em>
                                </label>
                            </div>

                            {/* <form> */}
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="text" name='fullName' onChange={inputIsChanging} required className="form-control" placeholder="Full name" value={user?.fullName} />
                                        <label>Full name</label>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="email" name='email' onChange={inputIsChanging} required className="form-control" placeholder="Email address" value={user?.email} />
                                        <label>Email address</label>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="text" name='department' onChange={inputIsChanging} required className="form-control" placeholder="Phone number" value={user?.department} />
                                        <label>Department</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="text-center mt-4">
                                        <button type="submit" disabled={isLoading} name="submit" onClick={() => handleSubmit(user._id)} className={`${style.container} btn btn-main-1 w-25 text-medium rounded-0 py-3 px-4`} >
                                            <b>
                                                {isLoading ? "Updating..." : "Submit"}
                                            </b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>

            </div>

        <Footer/>

        </div>
    )
}

export default EditProfile