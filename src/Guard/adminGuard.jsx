import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAdmin } from '../Slices/adminSlice';
import BaseUrl from '../BaseUrl';

const AdminGuard = () => {
    const dispatch = useDispatch();
    const [component, setComponent] = useState(
        <div className='text-center d-flex justify-content-center align-items-center' style={{minHeight:"100vh", top:'50%'}}>
            <div class="spinner-grow text-dark" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        )
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.token) {
            axios.get(BaseUrl + "getAdmin").then(res => {
                if (res.data.status) {
                    dispatch(setAdmin(res.data.data));
                    setComponent(<Outlet />)
                }
            }).catch(err => {
            })
        } else {
            navigate("/AdminLogin")

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return component

}


export default AdminGuard