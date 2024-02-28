import React from 'react'
import TutorNavBar from './TeacherNavBar'
import Footer from '../Landing/Footer'
import style from '../styles/LandNavBar.module.css'
import avatar from '../images/avatar.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Dashboard = () => {
    const dispatch = useDispatch();
    const { loginAdmin: user } = useSelector((state) => state.admin);

    const userImageUrl = useRef()


    const handleImage = () => {
        const data = new FormData();
        data.append("userImageUrl", userImageUrl.current.files[0])

        axios.patch(BaseUrl + `userImage/${user._id}`, data)
            .then((res) => {
                if (res.data.status) {
                    axios.get(BaseUrl + "getUser").then(res => {
                        if (res.data.status) {
                            dispatch(setuser(res.data.data));
                            // const formattedDate = moment(res.data.joinDate).format('YYYY-MM-DD');
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
                        <h2 className="text-dark text-center mt-1 fw-bold fs-1"> Profile</h2>
                        <div className="col-lg-12">

                            {/* <div className="mb-4">
                        <label htmlFor="image">
                            <input type="file" id="image" name="image" className="d-none" />
                            <div className="avatar-circle cursor-pointer rounded-circle mx-auto mb-2">
                                <img src={avatar} className="img-fluid object-fit-cover object-position-center w-25 h-25" alt="Avatar" />
                            </div>
                            <em>Change your photo</em>
                        </label>
                    </div> */}

                            <div className="mb-4">
                                <label for="image">
                                    <input type="file" onChange={handleImage} ref={userImageUrl} className="" />
                                    <div className="avatar-circle cursor-pointer rounded-circle mx-auto mb-2">
                                        <img src={avatar} alt='sjnd' className="img-fluid object-fit-cover object-position-center w-100 h-100" />
                                    </div>
                                    <em>Change your photo </em>
                                </label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="mb-0">Profile</h3>
                                <Link to="/editProfile" className="text-dark">Edit Profile</Link>
                            </div>

                            <form>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" placeholder="Full name" value={user?.fullName} disabled />
                                            <label>Full name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" placeholder="Email address" value={user?.email} disabled />
                                            <label>Email address</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" placeholder="Phone number" value={user?.department} disabled />
                                            <label>Department</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </div>


            <Footer />
        </div>
    )
}

export default Dashboard