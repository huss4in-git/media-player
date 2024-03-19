import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import './Home.css'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [uploadVideoStatus, setUploadVideoStatus] = useState({})
  const [videoDragAndRemoveStatus, setVideoDragAndRemoveStatus] = useState(false)

  return (
    <>
    <div style={{backgroundColor:'#3dff88'}} className='line2 d-flex justify-content-center align-items-center'>
        <svg xmlns='http://www.w3.org/2000/svg' width='1000' height='50' viewBox='0 0 1015 30' fill='none'><path d='M1013 28C961.535 24.8162 962.429 12.4065 904.827 8.65109C867.133 6.19729 862.661 11.2896 784.173 14.8076C741.798 16.7337 700.027 18.6334 648.957 15.6871C581.744 11.8085 582.93 4.41191 536.623 4.2536C464.751 4.00735 455.14 21.8435 393.086 20.0845C328.89 18.3255 317.677 -1.33999 266.191 2.49461C220.738 5.88067 210.898 22.5735 172.58 20.0845C149.698 18.5982 143.873 12.0371 103.932 8.65109C91.0762 7.56051 80.5709 7.29666 64.4074 6.89209C43.6234 6.36826 22.784 6.36826 2 6.89209' stroke='#3dff88' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /></svg>
      </div>
      <div style={{backgroundColor:'#3dff88'}} className="d-flex justify-content-between align-items-center">
        <Add setUploadVideoStatus={setUploadVideoStatus} />
        <Link className='Link' to={'/watch-history'}>Watch History</Link>
      </div>
      <div style={{backgroundColor:'#3dff88'}} className="row">
        <div className="col-md-9">
          <h3 className='av mt-4'>All Videos</h3>
          <View uploadVideoStatus={uploadVideoStatus} setVideoDragAndRemoveStatus={setVideoDragAndRemoveStatus} />
        </div>
        <div className="col-md-3 px-4">
          <Category setVideoDragAndRemoveStatus={setVideoDragAndRemoveStatus} videoDragAndRemoveStatus={videoDragAndRemoveStatus}/>
        </div>
      </div>
    </>
  )
}

export default Home