import React, { useEffect, useRef, useState } from 'react'
import UserNav from './UserNav'
import Worshipp from '../images/worship-2.jpg'
// import avatar from '../images/avatar-1.jpeg'
import ava from '../images/000.png'
import { Link, useNavigate } from 'react-router-dom'
import BaseUrl from '../BaseUrl'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { setuser } from '../Slices/UserSlices'
import Footer from '../LandingPage/Footer'

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
        axios.get(BaseUrl + "getUser")
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
        axios.patch(BaseUrl + `editUser/${_id}`, user)
            .then(res => {
                if (res.data.status) {
                    // console.log(res);
                    const result = res.data.message;
                    toast.success(result, {
                        autoClose: 3000,
                    })
                }
                navigate("/Dashboard")
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
    const { loginUser: loginuser } = useSelector((state) => state.login)

    const userImageUrl = useRef()


    const handleImage = () => {
        const data = new FormData();
        data.append("userImageUrl", userImageUrl.current.files[0])

        axios.patch(BaseUrl + `userImage/${loginuser._id}`, data)
            .then((res) => {
                if (res.data.status) {
                    axios.get(BaseUrl + "getUser").then(res => {
                        if (res.data.status) {
                            dispatch(setuser(res.data.data));
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
            <UserNav />

            <div className="main-content">

                <div className="welcome-sect">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="grid-item inner-box grid-cover mb-5" style={{ backgroundImage: `url(${Worshipp})` }}>
                                    <div className="overlay-hero"></div>
                                    <h2 className="text-white z-index-1">Welcome, {user?.fullName}</h2>
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
                                        <img src={loginuser?.userImageUrl || ava} alt='sjnd' className="img-fluid object-fit-cover object-position-center w-100 h-100" />
                                    </div>
                                    <em>Change your photo </em>
                                </label>
                            </div>

                            {/* <form> */}
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="text" name='titles' onChange={inputIsChanging} required className="form-control" placeholder="Mr" value={user?.titles} />
                                        <label>Title</label>
                                    </div>
                                </div>
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
                                        <input type="text" name='mobile' onChange={inputIsChanging} required className="form-control" placeholder="Phone number" value={user?.mobile} />
                                        <label>Phone number</label>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="text" name='postalCode' onChange={inputIsChanging} required value={user?.postalCode} className="form-control" placeholder="Postal code" />
                                        <label>Postal code</label>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="text" name='address' onChange={inputIsChanging} required value={user?.address} className="form-control" placeholder="Address" />
                                        <label>Address</label>
                                    </div>
                                </div>
                                <div className="col-lg-4 ">
                                    <div className="form-floating mb-3">
                                        <input type="date" name='Dob' onChange={inputIsChanging} required value={user?.Dob} className="form-control" placeholder="Address" />
                                        <label>Date Of Birth</label>
                                    </div>
                                </div>
                                <div className="col-lg-4 ">
                                    <div className="form-floating mb-3">
                                        <input type="text" name='gender' onChange={inputIsChanging} required value={user?.gender} className="form-control" placeholder="Address" />
                                        <label>Gender</label>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <p className="mb-0"><label>Status</label></p>
                                    <span className="badge text-bg-success">Member</span>
                                </div>
                                <div className="col-lg-12">
                                    <div className="text-center mt-4">
                                        <button type="submit" disabled={isLoading} name="submit" onClick={() => handleSubmit(user._id)} className="btn btn-main-1 w-25 text-medium rounded-0 py-3 px-4" >
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

            <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
        </div>
    )
}

export default EditProfile