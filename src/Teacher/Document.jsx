import React, { useRef } from 'react'
import TutorNavBar from './TeacherNavBar'
import style from '../styles/LandNavBar.module.css'
import Footer from '../Landing/Footer'
import axios from 'axios'
import BaseUrl from '../BaseUrl'

const Document = () => {
    const title = useRef();
    const youtubeLink = useRef();
    const pdfFile = useRef();
    const pdfLink = useRef();
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
        axios.get(BaseUrl + 'getNews')
            .then(data => {
                setInfo(data.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleSubmit = (resetForm) => {
        const data = new FormData();
        data.append("title", title.current.value)
        data.append("youtubeLink", youtubeLink.current.value)
        data.append("pdfLink", pdfLink.current.value)
        data.append("pdfFile", pdfFile.current.value)

        setIsLoading(true);
        axios.post(BaseUrl + "tutorDocument", data).then(
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
                                            <input type="file" ref={pdfFile} onChange={handleChange} />
                                            <label>Pdf Link</label>
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