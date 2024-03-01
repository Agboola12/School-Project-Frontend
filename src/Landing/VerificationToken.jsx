import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useLocation, useNavigate } from 'react-router-dom';
import BaseUrl from '../BaseUrl';


const VerificationToken = ({  }) => {
const navigate = useNavigate();
const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const paramValue = queryParams.get('token');

  const [verificationStatus, setVerificationStatus] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(BaseUrl +`verify/${paramValue}`);
        if(response.data.status){
            setVerificationStatus(response.data.message); 
            navigate("/login")
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setVerificationStatus('Invalid verification token.');
        } else {
          setVerificationStatus('Error verifying email.');
        }
      }
    };

    verifyEmail();
  }, [paramValue]);

  return (
    <div className='text-center mx-auto mt-5'>
      <h1>Verification Status</h1>
      <p>{verificationStatus}</p>
    </div>
  );
};

export default VerificationToken;
