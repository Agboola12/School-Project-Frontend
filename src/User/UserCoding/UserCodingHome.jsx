import React from 'react'
import UserNavBar from '../UserNavBar'
import { Link } from 'react-router-dom'
import image3 from '../../images/image3.png'
import image2 from '../../images/image2.png'
import tes from '../../images/tes1.png'
import Footer from '../../Landing/Footer'


const UserCodingHome = () => {
  return (
    <div>
      <UserNavBar />
      <div className='container'>
        <div className='row shadow bg-white  mb-5 p-3'>
          <div className='col-lg-3'>
            <Link to='' className='nav-link text-dark'>Web Development</Link>
          </div>
          <div className='col-lg-3'>
            <Link to='' className='nav-link text-dark'>Mobile Development</Link>
          </div>
          <div className='col-lg-3'>
            <Link to='' className='nav-link text-dark'>Game Development</Link>
          </div>
        </div>

        <div className='mt-5'>
          <h2>Web Development Courses </h2>
          <h4 className='mt-3'> Courses to get started with </h4>
          <div className='row mt-4 mb-5'>
            <div className='col-lg-3 h-50 '>
              <img src={image3} alt='djkf' className='w-100' />
              <div className='mt-5'>
                <h5>Html 5</h5>
                <p>#8,000</p>
              </div>
            </div>
            <div className='col-lg-3 h-50 '>
              <img src={image3} alt='djkf' className='w-100' />
              <div className='mt-5'>
                <h5>ReactJs</h5>
                <p>#20,000</p>
              </div>
            </div>
            <div className='col-lg-3 h-50 '>
              <img src={image3} alt='djkf' className='w-100' />
              <div className='mt-5'>
                <h5>Bootsrap</h5>
                <p>#2,000</p>
              </div>
            </div>
            <div className='col-lg-3 h-50 '>
              <img src={image3} alt='djkf' className='w-100' />
              <div className='mt-5'>
                <h5>VueJs</h5>
                <p>#50,000</p>
              </div>
            </div>

          </div>
        </div>


        <div className='row mb-5 shadow-sm jumbotron'>
          <div className='col-lg-6'>
            <img src={image2} alt='test' />
          </div>
          <div className=' col-lg-6  fs-5 text-center'>
            <h3>The Programmer's Reverie</h3>
            <p className='mt-4'>In the quiet of the night, I sit and code,<br />
              With dreams of worlds yet to unfold.<br />
              In syntax and logic, I find my muse,<br />
              Crafting the future, I cannot refuse.</p>
          </div>
        </div>

        <div className='mt-5' >
          <h2>Topics</h2>
          <div className='d-flex' style={{ overflowX: 'scroll' }}>
            <div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>Html</h4>
              </div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>Css</h4>
              </div>
            </div>
            <div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>Javascript</h4>
              </div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>Bootstrap</h4>
              </div>
            </div>
            <div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>Tailwind</h4>
              </div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>ReactJs</h4>
              </div>
            </div>
            <div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>Material UI</h4>
              </div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>NodeJs</h4>
              </div>
            </div>
            <div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>AngularJs</h4>
              </div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>Php</h4>
              </div>
            </div>
            <div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>MySQL</h4>
              </div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>VueJs</h4>
              </div>
            </div>
            <div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>Laravel</h4>
              </div>
              <div className='border border-dark m-1 p-2' style={{ width: '12em', height: '5em' }}>
                <h4>React Native</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-5 mb-5'>
          <h3 className='mt-3 mb-3'>Some Of Our Instructors</h3>
          <div className='col-lg-3 '>
            <div className='d-flex p-3 border border-dark'>
              <div className='mr-4'>
                <img src={tes} alt='jk' className='rounded' />
              </div>
              <div>
                <small className='fw-bold h5'>John Doe</small><br/>
                <small>Javascript, ReactJs</small><br/>
                <small>140,000 Students</small><br/>
                <small>7 Courses</small>
              </div>
            </div>
          </div>
          <div className='col-lg-3 '>
            <div className='d-flex p-3 border border-dark'>
              <div className='mr-4'>
                <img src={tes} alt='jk' className='rounded' />
              </div>
              <div>
                <small className='fw-bold h5'>John Doe</small><br/>
                <small>Javascript, ReactJs</small><br/>
                <small>140,000 Students</small><br/>
                <small>7 Courses</small>
              </div>
            </div>
          </div>
          <div className='col-lg-3 '>
            <div className='d-flex p-3 border border-dark'>
              <div className='mr-4'>
                <img src={tes} alt='jk' className='rounded' />
              </div>
              <div>
                <small className='fw-bold h5'>John Doe</small><br/>
                <small>Javascript, ReactJs</small><br/>
                <small>140,000 Students</small><br/>
                <small>7 Courses</small>
              </div>
            </div>
          </div>
          <div className='col-lg-3 '>
            <div className='d-flex p-3 border border-dark'>
              <div className='mr-4'>
                <img src={tes} alt='jk' className='rounded' />
              </div>
              <div>
                <small className='fw-bold h5'>John Doe</small><br/>
                <small>Javascript, ReactJs</small><br/>
                <small>140,000 Students</small><br/>
                <small>7 Courses</small>
              </div>
            </div>
          </div>

        </div>





      </div>

      <Footer />
    </div>
  )
}

export default UserCodingHome