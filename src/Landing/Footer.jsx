import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'


const Footer = () => {
  return (
    <div>
                    <footer className="footer text-white py-5" style={{ backgroundColor: "#222123" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium text-uppercase text-white">
                            <img src={logo} alt='ksdj' />
                            </h6>
                        </div>
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium text-uppercase text-white">FIND US</h6>
                            <p>2 Gloucester Road, Off Manor Road, Luton LU1 3HX, Bedfordshire, United Kingdom</p>
                        </div>
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium text-uppercase text-white">Email Us</h6>
                            <ul className="list-unstyled">
                                <li><Link to="mailto:admin@victorycenter.org.uk" className="text-white text-decoration-none">admin@victorycenter.org.uk</Link></li>
                                <li><Link to="mailto:pastordoherty@victorycenter.org.uk" className="text-white text-decoration-none">pastordoherty@victorycenter.org.uk</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium text-uppercase text-white">MAIL TO</h6>
                            <p className="mb-0">P.O. Box 18160</p>
                            <p>Richmond, VA 23226</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>© 2024 Black Man. All Rights Reserved</div>

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