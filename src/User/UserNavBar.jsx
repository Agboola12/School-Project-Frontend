import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaAngleDown } from 'react-icons/fa'; 
import style from '../styles/LandNavBar.module.css';
import logo from '../images/Logo.png';


const UserNavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);



    return (
        <div>
            <div className={style.body}>
                <div className={`${style.container} container mt-3 mx-auto p-2 text-center`}>
                    <p>Free Courses. Sales Ends Soon. Get It Now</p>
                </div>
                <div className='container'>

                    <nav className="navbar navbar-expand-sm navbar-light " id="home" >

                        <Link to="/" className="navbar-brand p-3">
                            <img src={logo} alt='jjkbd' className='w-50' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sab">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="sab">
                            <ul className="navbar-nav list-line">
                                <li className="nav-item active list-line-item mr-5 ">
                                    <Link to="/user-profile" className="nav-link active text-center ">Profile</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div className='d-flex w-100'>
                                            <Link className="dropdown-item" to="/usercodinghome">Coding</Link>
                                            <Link className="dropdown-item" to="#">Carpentry</Link>
                                            <Link className="dropdown-item" to="#">Cooking</Link>
                                            <Link className="dropdown-item" to="#">Graphic Design</Link>
                                            <Link className="dropdown-item" to="#">Tailoring</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav list-line mr-auto">
                                <li className="nav-item active list-line-item mr-5 ">
                                    <Link className="nav-link active text-center" to="/">Log Out</Link>
                                </li>
                            </ul>



                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default UserNavBar