import React, { useEffect, useRef, useState } from 'react'
import TutorNavBar from './TeacherNavBar'
import style from '../styles/LandNavBar.module.css'
import Footer from '../Landing/Footer'
import axios from 'axios'
import BaseUrl from '../BaseUrl'

const Document = () => {
    const title = useRef();
    const youtubeLink = useRef();
    const pdfLink = useRef();
    const pdfFile = useRef();
    const [Error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [info, setInfo] = useState([])

    const [result, setResult] = useState({
        message: "",
        status: false
    })

    useEffect(() => {
        FetchData();
    }, [])
    const FetchData = () => {
        axios.get(BaseUrl + 'getDocument')
            .then(res => {
            console.log(res.data.data);
                setInfo(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
    // console.log();

    const handleSubmit = (resetForm) => {
        const data = new FormData();
        data.append("title", title.current.value)
        data.append("youtubeLink", youtubeLink.current.value)
        data.append("pdfLink", pdfLink.current.value)
        data.append("pdfFile", file);

        setIsLoading(true);
        axios.post(BaseUrl + "tutorInfo", data).then(
            res => {
                if (res.data.status) {
                    // FetchData();
                }
                else {
                    setError(res.data.message);
                }
                setResult({
                    message: res.data.message,
                    status: res.data.status
                })
                setTimeout(() => {
                    setResult({
                        message: "",
                        status: false
                    });
                    setError("");
                    resetForm();
                }, 3000);
            })
            .catch((err) => {
                console.log(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div>
            <TutorNavBar />

            <div className="main-content">
                <div className="about-sect">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="grid-item inner-box grid-cover mb-3 " id={style.tutor} >
                                    <div className="overlay-hero"></div>
                                    {/* <h2 className="text-white z-index "> Profile</h2> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mb-5'>
                    <h2 className="text-dark text-center mt-4 fw-bold "> Uploading Of Document</h2>
                    <div className='row mt-5'>
                        <div className="col-lg-6 mb-lg-0 mb-5">
                            <p>
                                <b className="text-danger">{Error}</b>
                            </p>
                            <div
                                className={`alert alert-${result.status ? 'success' : 'danger'} text-center text-${result.status ? 'success' : 'danger'
                                    } d-${result.message ? 'block' : 'none'}`}>
                                {result.message}
                            </div>
                            <form method="post" action="">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-floating mb-3">
                                            <input name='title' type='text' className="form-control" ref={title} placeholder=" Title" />
                                            <label>Title</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input name='youtube' type='text' className="form-control" ref={youtubeLink} placeholder="Youtube" />
                                            <label>YouTube Link</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input name='youtube' type='text' className="form-control" ref={pdfLink} placeholder="Pdf Link" />
                                            <label>Pdf Link</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <label className=''> Document</label>
                                            <input id="file" type="file" ref={pdfFile} onChange={handleFileChange } accept=".pdf,.doc,.docx .txt"  />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="text-center mt-4">
                                            <button type="submit" disabled={isLoading} onClick={handleSubmit} name="submit" className="btn btn-main-1 w-100 text-medium text-light rounded-0 py-3 px-4" style={{ backgroundColor: '#FF9500' }} >
                                                <b>
                                                    {isLoading ? "Loading..." : "Submit"}
                                                </b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 mb-lg-0 mb-5">
                            <div className=' mx-auto text-center'>
                                <div style={{ height: '300px' }} className="overflow-auto bg-light p-lg-4 p-3 rounded">
                                        <h5 className="text-center mb-5">Document</h5>
                                        <hr />
            {news.sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).map((post) => (
                                            <div className="mb-3 border-bottom">
                                                <h6>{post.title}</h6>
                                 <p className="line-clamp-3 ft-lg " dangerouslySetInnerHTML={{ __html: post.message }}></p>
                                                <p className="text-muted text-medium ft-sm"><em>Published on {post.joinDate}.</em></p>
                                                <button type="submit"  name="submit" onClick={() => DeleteNews(post._id)} className="btn btn text-danger" >
                                                     <i className="fa fa-trash"></i>
                                                </button>
                                                <button type="submit" name="submit" onClick={() =>EditNews(post._id)} className="btn btn text-success  mr-2" >
                                                <i className='fa fa-edit'></i>
                                            </button>
                                            </div>

                                        ))}
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

export default Document