import React, { useEffect, useState } from 'react'
import LandNavBar from './LandNavBar'
import { useNavigate } from 'react-router-dom'
import BaseUrl from '../BaseUrl'
import axios from 'axios'
import avatar from '../images/avatar.jpeg'
import Footer from './Footer'



const AllLecturer = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');


    const [users, setUser] = useState([])
    useEffect(() => {
        FetchData();
    }, [])

    const FetchData = () => {
        axios.get(BaseUrl + 'getAllUser')
            .then(res => {
                setUser(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handlePost = (_id) => {
        navigate("/tutordetails/?userId=" + _id)
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const filteredMembers = users.filter((member) =>
      member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            <LandNavBar />

            <div className='container mt-4'>
                <p className='fw-bold h3 text-center mt-5 mb-5'>Our Lecturers</p>
            <input type='text' name='search' style={{textAlign: 'center'}} placeholder='Search for a member' value={searchTerm} onChange={handleSearch} className='w-75 mx-auto centered-placeholder form-control mb-4'/>
                <div className='row '>
                    {filteredMembers.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((user, index) => (
                        <div key={index} className='col-lg-3 mr-5 shadow border border-black p-3 mx-auto text-center mb-5 rounded'>
                            <div className='mb-3'>
                                <img src={user.userImageUrl || avatar} alt='Profile' className='w-50' style={{ borderRadius: '20%' }} />
                            </div>
                            <div>
                                <p className='fw-bold text-success'>{user.fullName}</p>
                                <p className='fw-bold text-success'>{user.email}</p>
                                <p>{user.department}</p>
                                <button onClick={() => handlePost(user._id)} className='btn btn-outline-success'>View Profile</button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <Footer/>
        </div>
    )
}

export default AllLecturer