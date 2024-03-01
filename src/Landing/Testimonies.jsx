import React, { useRef, useState } from 'react'
import LandNavBar from '../Landing/LandNavBar'
import Footer from '../Landing/Footer'
import style from '../styles/LandNavBar.module.css'


const Testimonies = () => {

    const fullName = useRef();
    const message = useRef();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState({
        message: "",
        status: false
    })

    const HandleSubmit = (e, resetForm)=>{
        e.preventDefault(e);

        const info = {
            fullName: fullName.current.value,
            message: message.current.value,
        };

        setIsLoading(true);

        axios.post(BaseUrl + 'userTestimony', info )
        .then((res)=>{
            if(res.data.status){
                setResult({
                    message: res.data.message,
                    status: res.data.status,
                });
            }
            setTimeout(() => {
                setResult({
                    message: "",
                    status: false,
                });
                setError("");
                resetForm();
            }, 3000);
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }


  return (
    <div>
      <LandNavBar />
      <div className='bg-light p-5'>
                <div className="container p-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 ">
                            <div className=" p-4 mb-5 bg-white p-5">
                                <h2 className="text-center fw-bold">Testimony</h2>
                                <p>
                                    <b className="text-danger">{error}</b>
                                </p>
                                <div
                                    className={`alert alert-${result.status ? 'success' : 'danger'} text-center text-${result.status ? 'success' : 'danger'
                                        } d-${result.message ? 'block' : 'none'}`}>
                                    {result.message}
                                </div>
                                <form action="" method="post" enctype="multipart/form-data" onSubmit={HandleSubmit} className='mt-5'>
                                    <div className="form-group">
                                        <input type="text" ref={fullName} className="form-control  d-grid col-12" required placeholder="Enter your FullName" />
                                    </div>
                                    <div className="form-group">
                                        <textarea type="message" ref={message} className="form-control  d-grid col-12" required placeholder="Enter your Messgae" />
                                    </div>
                                    <div className="form-check mt-5">
                                        <button disabled={isLoading} name="submit" className={`${style.container} btn btn-warning h-75 p-2 fw-bold fs-4 d-grid gap-2 col-12 mx-auto`}>
                                            <b>
                                                {isLoading ? "Loading..." : "Submit"}
                                            </b>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

      <Footer />
    </div>
  )
}

export default Testimonies