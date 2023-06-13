import React from 'react'
import { useLocation } from 'react-router-dom';
import '../App.css'

export default function CoursePage() {


  const location = useLocation();

  return (
    <div>
      {
        location.state.course ? <div>
          <h1>{location.state.course.title}</h1>
          <h3>{location.state.course.description}</h3>
        </div> : <p>загрузка</p>

        
      }
      <video className='video-player' src='https://localhost:7225/api/Content/GetVideo?id=23' controls="controls"></video>
    </div>
  )
}
