import React from 'react'
import style from '../styles/LandNavBar.module.css'
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom'


const TutorNavBar = () => {

  return (
    <>
      <div className={style.body}>
        <div className={`${style.container} container mt-3 mx-auto p-2 fw-bold fs-4 text-center`}>
          <p>Learning Today . . .  Leading Tomorrow</p>
        </div>
        <div className='container'>

          <nav className="navbar navbar-expand-sm navbar-light " id="home" >

            <a href="" className="navbar-brand p-3">
              <img src={logo} alt='jjkbd' className='w-50' />
            </a>
            <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="sab">
              <ul className="navbar-nav list-line mx-auto">
                <li className="nav-item active list-line-item mr-5 ">
                  <Link to="/dashboard" className="nav-link active text-center ">Dashboard</Link>
                </li>
                <li className="nav-item dropdown list-line-item mr-5 " >
                  <Link to="/document" className="nav-link active text-center">Document </Link>
                </li>

              </ul>
              <ul className="navbar-nav list-line ml-auto">
                <li className="nav-item active list-line-item mr-5 " >
                  <Link to="/login" className='text-light nav-link text-center btn btn' style={{ backgroundColor: '#FF9500' }} >Logout</Link>
                </li>
              </ul>

            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default TutorNavBar