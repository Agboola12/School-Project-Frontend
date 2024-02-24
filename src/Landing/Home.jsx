import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
        <NavBar/>

        <header className={style.header}>
        {/* <div class="text-center"  id="home">
          <h6 style="margin-bottom: 20%">sjdbmn</h6>
          <h2 class="text-light"  >Learning Today . . .  Leading Tomorrow</h2>
          <p class="text-light" >Knowledge is key to sucess</p>
          <button class="btn btn-success"> Take Admission</button>
          
      </div> */}
    </header>
    </div>
  )
}

export default Home