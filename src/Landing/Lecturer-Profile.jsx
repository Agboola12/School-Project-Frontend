import React, { useEffect, useState } from 'react'
import LandNavBar from './LandNavBar'
import aderonke from '../videos/aderonke.mp4'
import Footer from './Footer'
import { useSearchParams } from 'react-router-dom'
import BaseUrl from '../BaseUrl'
import axios from 'axios'
import avatar from '../images/avatar.jpeg'



const Profile = () => {

    const [tutor, setTutor] = useState([])
    const [info, setInfo] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [youtube, setYoutube] = useState("")


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(BaseUrl + `tutorDetails/${searchParams.get('userId')}`);
                if (res.data.status) {
                    setTutor(res.data.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [searchParams]);

    useEffect(() => {
        const fetchDataInfo = async () => {
            if (tutor._id) {
                try {
                    const res = await axios.get(BaseUrl + `getInfo/${tutor._id}`);
                    if (res.data.status) {
                        setInfo(res.data.data);
                        const params = res.data.data[0].youtubeLink.split('=');
                        setYoutube(params[1]);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        };

        fetchDataInfo();
    }, [tutor]);

    const handleEmailClick = (email) => {
        window.location.href = `mailto:${email}`
    }



    // useEffect(() => {
    //     FetchData();
    // }, [])

    // const FetchData = () => {
    //     axios.get(BaseUrl + `tutorDetails/${searchParams.get('userId')}`)
    //         .then(res => {
    //             if (res.data.status) {
    //                 setTutor(res.data.data);
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    // useEffect(() => {
    //     if (tutor._id) {
    //         const fetchDataInfo = async () => {
    //             try {
    //                 const res = await axios.get(BaseUrl + `getInfo/${tutor._id}`);
    //                 if (res.data.status) {
    //                     setInfo(res.data.data);
    //                     const params = res.data.data.youtubeLink.split('=');
    //                     setYoutube(params[1])
    //                 }
    //             } catch (err) {
    //                 console.log(err);
    //             }
    //         };

    //         fetchDataInfo();
    //     }
    // }, [tutor]);



    return (
        <div>
            <LandNavBar />


            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-lg-4  '>
                        <div style={{ width: '400px' }}>
                            <img src={tutor.userImageUrl || avatar} alt='iod' className='w-50 ' />
                            <div class="card-body">
                                <h4><i className='fa fa-user'></i>{tutor.fullName}</h4>
                                <p style={{cursor: 'pointer'}} onClick={() => handleEmailClick(tutor.email)}><i className='fa fa-envelope'></i>{tutor.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body mt-3">
                                <div className="text-center">
                                    <button id="bttn" className=" fs-5 btn btn"> <i className="fa fa-flag" style={{ color: '#FF9500' }} ></i></button>
                                    <button id="bttn" className=" fs-5 btn btn text-dark"> Availability</button>
                                </div><br />
                                <div>
                                    <nav>
                                        <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link active" style={{ color: '#A10035' }} href="#about">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" style={{ color: 'grey' }} href="#Document">Document</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <hr />
                                {/* About */}
                                <div>
                                    <h4 id="about" className="title">About</h4>
                                    <p> I am {tutor.fullName}, a passionate and talented young man with a deep love of teaching students.
                                        Growing up in a teaching family, I began to teach at a young age, and ever since, I have dedicated myself to
                                        helping students learn and grow. My teaching philosophy is centered on creating engaging and interactive
                                        learning experiences that inspire curiosity and foster critical thinking skills. Outside of the classroom,
                                        I enjoy exploring new teaching methodologies and technologies to enhance the learning experience for my
                                        students.
                                    </p>
                                </div>
                            </div>
                            {/* Videos */}
                            <hr />
                            <div>
                                <h4 id="Document">Documents</h4>
                                <div className='row '>
                                    {info.length === 0 ? (
                                        <p>No documents available</p>
                                    ) : (
                                        info.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((post) => (
                                            <div className='col-lg-5 mx-auto mt-3 '>
                                                <div className="card shadow-sm bg-light" style={{ width: '300px' }}>
                                                    <iframe autoplay='true' src={`https://www.youtube.com/embed/${post.youtubeLink.split('=')[1]}?si=${post.youtubeLink.split('=')[1]}`} title="YouTube video" allowfullscreen></iframe>
                                                    <div className="card-body">
                                                        <h6> {post.title}</h6>
                                                        {/* <p className="text-muted text-medium ft-sm"><em>Download The Document: <a href={post.pdfLink}>Document PDF</a></em></p> */}
                                                        <p className="text-muted text-medium ft-sm"><em>Download The Document: <a href={post.pdfFile}>Document PDF</a></em></p>
                                                    
                                                    </div>
                                                </div>



                                            </div>
                                        ))
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Profile  