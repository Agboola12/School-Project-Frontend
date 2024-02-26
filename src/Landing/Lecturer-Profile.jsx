import React from 'react'
import LandNavBar from './LandNavBar'
import teach from '../images/lectu.jpg'


const Profile = () => {
    return (
        <div>
            <LandNavBar />


            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <img src={teach} alt='iod' className='w-50 rounded' />
                        <p><i className='fa fa-user'></i>Professor John Okafor</p>
                        <p><i className='fa fa-message'></i>JohnOkafor@gmail.com</p>
                        <p><i className='fa fa-location-dot'></i>Surrey, Canada</p>
                    </div>

                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body mt-3">
                                <div className="text-center">
                                    <button id="bttn" className="mr-3 fs-5 btn btn"> <i className="fa fa-flag text-light"></i></button>
                                    <button id="bttn" className="mr-3 fs-5 btn btn text-light"> Availability</button>
                                </div><br />
                                <div>
                                    <nav>
                                        <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link active" style={{ color: '#A10035' }} href="#about">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#photos">Photos</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#videos">Videos</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#song">Song List</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#genre">Genre</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <hr />
                                {/* About */}
                                <div>
                                    <h4 id="about" className="title">About</h4>
                                    <p>I am {user.firstName}, a passionate and talented wedding musician with a deep love for creating beautiful music. Growing up in a musical family, I began singing and playing instruments at a young age...</p>
                                </div>
                            </div>
                            {/* Videos */}
                            <hr />
                            <div>
                                <h4 id="videos" className="title">Video List</h4>
                                <p>Video is yet to be uploaded.</p>
                                {/* <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <video src="../assets/video/elijah.mp4" controls  class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>
                  
                  <video src="../assets/video/elijah.mp4" controls  class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>
              </div>
              </div> */}
                            </div>
                            {/* Songs */}
                            <div>
                                <h4 id="song" className="title">Song Lists</h4>
                                <div id="list" >
                                    {musics.length > 0 ?
                                        musics.map((song, index) => (
                                            <div key={index} className='shadow p-3 mb-5 d-flex m-2' id="song">
                                                <p>0{index + 1}.</p>
                                                <img src={song.imageUrl} alt="cover" className="ml-4" width="50" height="50" style={{ borderRadius: '50px' }} />
                                                <p className="ml-4 mr-4">{song.songTitle}</p>
                                                <audio controls><source src={song.mp3Url} type="audio/mpeg" /></audio>
                                            </div>
                                        )) :
                                        <p>Song is yet to be uploaded.</p>
                                    }
                                </div>
                            </div>
                            {/* Genre */}
                            <div className="mt-3">
                                <h4 id="genre" className="title">Genre</h4>
                                <p>Afro Beat, High life.</p>
                            </div>
                            {/* Event types */}
                            <div>
                                <h4 id="title" className="title">Event Type</h4>
                                <p>Wedding reception, After party.</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Profile