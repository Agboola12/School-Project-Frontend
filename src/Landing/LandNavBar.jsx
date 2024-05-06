import React from 'react'
import style from '../styles/LandNavBar.module.css'
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom'


const LandNavBar = () => {

  return (
    <>
      <div className={style.body}>
        <div className={`${style.container} container mt-3 mx-auto p-2 text-center`}>
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
                  <Link to="/" className="nav-link active text-center ">Home</Link>
                </li>
                <li className="nav-item dropdown list-line-item mr-5 " >
                  <Link to="/about" className="nav-link active text-center">About Us </Link>
                </li>
                <li className="nav-item dropdown list-line-item mr-5 " >
                  <Link to="/testimonies" className="nav-link active text-center">Feedback </Link>
                </li>
                <li className="nav-item dropdown list-line-item mr-5 " >
                  <Link to="/payment" className="nav-link active text-center">Payment </Link>
                </li>

                <li className="nav-item dropdown list-line-item mr-5 " >
                  <Link to="/contact" className='nav-link active text-center'>
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav list-line ml-auto">
                {/* <li className="nav-item active list-line-item mr-5 ">
                  <Link className="nav-link active text-center" to="/register">Register</Link>
                </li>  */}
                <li className="nav-item active list-line-item mr-5 " >
                  <Link to="/login" className='text-light nav-link text-center btn btn' style={{ backgroundColor: '#FF9500' }} >Login</Link>
                </li>
              </ul>

            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default LandNavBar