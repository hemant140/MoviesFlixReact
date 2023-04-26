import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {

  const navigate = useNavigate();
  return (
    <div style={{ height: 1000 }} className="errorimg">
      <img src="/404error.png" alt="" />

      <div className='divbtn'>
        <button className='btn' onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  )
}

export default PageNotFound
