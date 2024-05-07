import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'


const Footer = () => {
  return (
    <div>
    <footer className="footer text-white py-5" style={{ backgroundColor: "#222123" }}>
<div className="container-fluid">
    <div className="row">
        <div className="col-lg-2 mb-lg-0 mb-3">
            <h6 className="text-medium text-uppercase text-white">
            <img src={logo} alt='ksdj' style={{width:'200px'}} />
            </h6>
        </div>
        <div className="col-lg-3 mb-lg-0 mb-3">
            <h6 className="text-medium text-uppercase text-white">FIND US</h6>
            <p>Loogun-Ogberin Road, Ede, Osun- State</p>
        </div>
        <div className="col-lg-3 mb-lg-0 mb-3">
            <h6 className="text-medium text-uppercase text-white">Email Us</h6>
            <ul className="list-unstyled">
                <li><Link to="mailto:admissions@adelekeuniversity.edu.ng" className="text-white text-decoration-none">admissions@adelekeuniversity.edu.ng</Link></li>
                <li><Link to="mailto:registrar@adelekeuniversity.edu.ng" className="text-white text-decoration-none">registrar@adelekeuniversity.edu.ng</Link></li>
            </ul>
        </div>
        <div className="col-lg-4 mb-lg-0 mb-3">
            <h6 className="text-medium text-uppercase text-white">CALL NOW</h6>
            <p className="mb-0">+234 806 001 9561, +234 906702 3394,</p>
            <p>+234 096 337 0367</p>
        </div>
    </div>
    <hr />
    <div className="row">
        <div className="col-lg-12">
            <div className="d-flex justify-content-between align-items-center">
                <div>© 2024 Dibu. All Rights Reserved</div>

                <ul className="list-unstyled d-flex mb-0" style={{ gap: "10px" }}>
                    <li><Link to="#" className="text-white"><i className="bi bi-facebook"></i></Link></li>
                    <li><Link to="#" className="text-white"><i className="bi bi-instagram"></i></Link></li>
                    <li><Link to="#" className="text-white"><i className="bi bi-youtube"></i></Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</footer>
</div>
  )
}

export default Footer