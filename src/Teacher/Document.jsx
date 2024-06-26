import React, { useEffect, useRef, useState } from 'react'
import TutorNavBar from './TeacherNavBar'
import style from '../styles/LandNavBar.module.css'
import Footer from '../Landing/Footer'
import axios from 'axios'
import BaseUrl from '../BaseUrl'
import { useSelector } from 'react-redux'

const Document = () => {

    const courseTitle = useRef();
    const courseCode = useRef();
    const youtubeLink = useRef();
    const pdfLink = useRef();
    const pdfFile = useRef();
    const [Error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [info, setInfo] = useState([])
    const [editID, setEditID] = useState('')
    const [file, setFile] = useState(null);
    const { loginAdmin: loginuser } = useSelector((state) => state.admin);
    const [isLoad, setIsLoad] = useState(false)
    


    const [user, setUser] = useState({});


    const inputIsChanging = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(value)
        setUser({ ...user, [name]: value })
    }

    const [result, setResult] = useState({
        message: "",
        status: false
    })

    useEffect(() => {
        FetchData();
    }, [])
    const FetchData = () => {
        axios.get(BaseUrl + `getDocument/${loginuser._id}`)
            .then(res => {
                console.log(res.data.data);
                setInfo(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    // console.log();

    const handleSubmit = (e, resetForm) => {
        e.preventDefault();
        const data = new FormData();
        data.append("courseTitle", courseTitle.current.value)
        data.append("courseCode", courseCode.current.value)
        data.append("youtubeLink", youtubeLink.current.value)
        data.append("pdfLink", pdfLink.current.value)
        data.append("pdfFile", file);
        data.append("userId", loginuser._id);

        setIsLoading(true);
        if (editID) {
            axios.patch(BaseUrl + `EditInfo/${editID}`, data).then((res) => {
                if (res.data.status) {
                    FetchData();
                    setEditID('')
                    resetForm();
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
                }, 3000);
            }).catch((err) => {
                console.log(err.message);
            })
                .finally(() => {
                    setIsLoading(false);
                });
        }
        else {
            setIsLoading(true);
            axios.post(BaseUrl + "tutorInfo", data).then(
                res => {
                    if (res.data.status) {
                        FetchData();
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
        setUser({});
        courseTitle.current.value = '';
        courseCode.current.value = '';
        youtubeLink.current.value = '';
        pdfLink.current.value = '';
        pdfFile.current.value = '';
    }

    const DeleteInfo = (_id) => {
        axios.delete(BaseUrl + `delInfo/${_id}`)
            .then((res) => {
                if (res.data.status) {
                    FetchData();
                } else {
                    setError(res.data.message);
                }
                setResult({
                    message: res.data.message,
                    status: res.data.status,
                });
                setTimeout(() => {
                    setResult({
                        message: "",
                        status: false,
                    });
                    setError("");
                }, 3000);
            })
            .catch((err) => {
                console.log(err.message);
            })
    };


    const EditInfo = (_id) => {
        setEditID(_id)
        setUser(() => info.find((val) => val._id == _id))

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
                        <p>
                            <b className="text-danger">{Error}</b>
                        </p>
                        <div
                            className={`alert alert-${result.status ? 'success' : 'danger'} text-center text-${result.status ? 'success' : 'danger'
                                } d-${result.message ? 'block' : 'none'}`}>
                            {result.message}
                        </div>
                        <div className="col-lg-6 mb-lg-0 mb-5">
                            <form method="post" action="" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-floating mb-3">
                                            <input name='courseTitle' type='text' className="form-control" onChange={inputIsChanging} value={user?.courseTitle} ref={courseTitle} placeholder="Course Title" />
                                            <label>Course Title</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input name='courseCode' type='text' className="form-control" onChange={inputIsChanging} value={user?.courseCode} ref={courseCode} placeholder=" Course Code" />
                                            <label>Course Code </label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input name='youtubeLink' type='text' className="form-control" onChange={inputIsChanging} value={user?.youtubeLink} ref={youtubeLink} placeholder="Youtube" />
                                            <label>YouTube Link</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input name='pdfLink' type='text' className="form-control" onChange={inputIsChanging} value={user?.pdfLink} ref={pdfLink} placeholder="Pdf Link" />
                                            <label>Pdf Link</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <label className=''> Document</label>
                                            <input id="file" type="file" ref={pdfFile} onChange={handleFileChange} accept="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="text-center mt-4">
                                            <button type="submit" disabled={isLoading} name="submit" className="btn btn-main-1 w-100 text-medium text-light rounded-0 py-3 px-4" style={{ backgroundColor: '#FF9500' }} >
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
     
                                    
                                        {info.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((post) => (
                                            <div className="mb-3 border-bottom">
                                                <h6>{post.courseTitle}</h6>
                                                <h6>{post.courseCode}</h6>
                                                <p className="text-muted text-medium ft-sm"><em>Youtube Link: {post.youtubeLink}.</em></p>
                                                {/* <p className="text-muted text-medium ft-sm"><em>Document Link:<a href={post.pdfLink}>{post.pdfLink}</a></em></p> */}
                            {/* <iframe src={post.pdfFile}   title="Document"  /> */}
                            <p className="text-muted text-medium ft-sm"><em>Download The Document: <a href={post.pdfFile}>Document PDF</a></em></p>


                                                <button type="submit" name="submit" onClick={() => DeleteInfo(post._id)} className="btn btn text-danger" >
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                                <button type="submit" name="submit" onClick={() => EditInfo(post._id)} className="btn btn text-success  mr-2" >
                                                    <i className='fa fa-edit'></i>
                                                </button>
                                            </div>
                                        ))}
                                    


                                </div>
                            </div>



                            {/* <div className=' mx-auto text-center'>
                                <div style={{ height: '300px' }} className="overflow-auto bg-light p-lg-4 p-3 rounded">
                                    <h5 className="text-center mb-5">Document</h5>
                                    <hr />
                                    {info.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((post) => (
                                        <div className="mb-3 border-bottom">
                                            <h6>{post.title}</h6>
                                            <p className="text-muted text-medium ft-sm"><em>Youtube Link: {post.youtubeLink}.</em></p>
                                            {/* <p className="text-muted text-medium ft-sm"><em>Document Link: {post.pdfLink}.</em></p> */}
                            {/* <p className="text-muted text-medium ft-sm"><em>Document Link:<a href={post.pdfLink}>{post.pdfLink}</a></em></p> */}

                            {/* <iframe src={post.pdfFile} width="800" height="600" title="Document" className='bg-danger' /> */}
                            {/* <a href={post.pdfFile} download>Download Document</a> */}

                            {/* <p className="text-muted text-medium ft-sm"><em>Document File: {post.pdfFile}.</em></p> */}
                            {/* <button type="submit" name="submit" onClick={() => DeleteInfo(post._id)} className="btn btn text-danger" > */}
                            {/* <i className="fa fa-trash"></i> */}
                            {/* </button> */}
                            {/* <button type="submit" name="submit" onClick={() => EditInfo(post._id)} className="btn btn text-success  mr-2" > */}
                            {/* <i className='fa fa-edit'></i> */}
                            {/* </button> */}
                            {/* </div> */}

                            {/* ))} */}
                            {/* </div> */}

                            {/* </div> */}



                        </div>
                    </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Document