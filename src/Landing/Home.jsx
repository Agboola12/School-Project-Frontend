import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Home.module.css'
import colabo from '../assets/00.jpg' 

const Home = () => {
  return (
    <div>
        <NavBar/>

        <header className={style.header}>
        <div className="text-center"  id="home">
          <h6 style={{marginBottom: '20%'}}>sjdbmn</h6>
          <h2 className="text-light"  >Learning Today . . .  Leading Tomorrow</h2>
          <p className="text-light" >Knowledge is key to sucess</p>
          <button className="btn btn-success"> Take Admission</button>
      </div>
    </header>

    <div className='container mt-5'>
      <div className='row mb-5'>
        <div className='col-lg-3 mr-3 shadow-lg bg-light p-5 mx-auto text-center'>
          <img src={colabo} alt='kakd' className='w-75' style={{borderRadius: '50%'}} />
          <p className='fw-bold h4'>Collaborate</p>
          <p>Manage projects, organise tasks, and build spirit - all in a place</p>
        </div>
        <div className='col-lg-3 mr-3 shadow-lg bg-light p-5 mx-auto text-center'>
          <img src={colabo} alt='kakd' className='w-75' style={{borderRadius: '50%'}} />
          <p className='fw-bold h4'>Collaborate</p>
          <p>Manage projects, organise tasks, and build spirit - all in a place</p>
        </div>
        <div className='col-lg-3 mr-3 shadow-lg bg-light p-5 mx-auto text-center'>
          <img src={colabo} alt='kakd' className='w-75' style={{borderRadius: '50%'}} />
          <p className='fw-bold h4'>Collaborate</p>
          <p>Manage projects, organise tasks, and build spirit - all in a place</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home