import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Home.module.css'
import colabo from '../assets/00.jpg' 
import col from '../assets/aa.jpeg' 

const Home = () => {
  return (
    <div >
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
          <img src={colabo} alt='kakd' className='w-75 h-50' style={{borderRadius: '50%'}} />
          <p className='fw-bold h4'>Collaborate</p>
          <p>Manage projects, organise tasks, and build spirit - all in a place</p>
        </div>
        <div className='col-lg-3 mr-3 shadow-lg bg-light p-5 mx-auto text-center'>
          <img src={colabo} alt='kakd' className='w-75 h-50' style={{borderRadius: '50%'}} />
          <p className='fw-bold h4'>Collaborate</p>
          <p>Manage projects, organise tasks, and build spirit - all in a place</p>
        </div>
        <div className='col-lg-3 mr-3 shadow-lg bg-light p-5 mx-auto text-center'>
          <img src={colabo} alt='kakd' className='w-75 h-50' style={{borderRadius: '50%'}} />
          <p className='fw-bold h4'>Collaborate</p>
          <p>Manage projects, organise tasks, and build spirit - all in a place</p>
        </div>
      </div>
    </div>

    <div className='container mt-5 mb-5'>
      <p className='h3 text-center fw-bold'>Lecturers</p>
    <div className='row mt-5'>
        <div className='col-lg-3 mr-5 d-flex'>
          <img src={col} alt='tech' className=' w-50' style={{borderRadius:'50px'}}/>
         <div className='ml-4'>
          <small className='fw-bold h5'> Adebite </small><br/>
          <small>Physics </small><br/>
          <small>1,250,000 Students</small>
        </div>
        </div>
        <div className='col-lg-3 mr-5 d-flex'>
          <img src={col} alt='tech' className=' w-50' style={{borderRadius:'50px'}}/>
         <div className='ml-4'>
          <small className='fw-bold h5'> Adebite </small><br/>
          <small>Physics </small><br/>
          <small>1,250,000 Students</small>
        </div>
        </div>
        <div className='col-lg-3 mr-5 d-flex'>
          <img src={col} alt='tech' className=' w-50' style={{borderRadius:'50px'}}/>
         <div className='ml-4'>
          <small className='fw-bold h5'> Adebite </small><br/>
          <small>Physics </small><br/>
          <small>1,250,000 Students</small>
        </div>
        </div>
    </div>
        <a href='#' className='text-right'><p>More..</p></a>
    </div>

    <div class="container-fluid bg-dark text-light text-center p-4"  id="footer">
    
               <div class="mt-3">
                <span class="fab fa-facebook m-1"></span>
                <span class="fab fa-whatsapp m-1"></span>
               <span class="fab fa-twitter m-1"></span>
               <span class="fab fa-instagram m-1"></span>
              </div> <br/>
            
            <p>© Copyright Agboola E.I All right reserved. Template by <a href="elijahagboola077">Elite</a>.</p>
      </div>
    </div>
  )
}

export default Home