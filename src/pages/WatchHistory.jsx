import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './WatchHistory.css'
import { deleteWatchHistoryapi, getAllVideoHistory } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WatchHistory() {

  const [historyVideos, setHistoryVideos] = useState([])

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  // function to get all videos in history

  const getHistory = async ()=>{
    const response = await getAllVideoHistory()
    // console.log(response);
    setHistoryVideos(response.data)
  }
  // console.log(historyVideos);

  // function to delete video from history

  const handleDelete = async(id)=>{
    const response = await deleteWatchHistoryapi(id)
    // console.log(response);
    if(response.status>=200 && response.status<300){
      setDeleteVideoStatus(true)
    }
    else{
      toast.error('something went wrong')
    }
  }

  useEffect(()=>{
    getHistory()
    setDeleteVideoStatus(false)
  },[deleteVideoStatus])
  return (
    <>
    <div style={{backgroundColor:'#3dff88'}} className=' d-flex justify-content-between p-5 align-items-center'>
      <h3 className='wh'>Watch History</h3>
      <Link className='Link1' to={'/home'}><FontAwesomeIcon icon={faArrowLeft} style={{color:'#ffff38'}} /> Back to Home</Link>
    </div>

    <div style={{backgroundColor:'#3dff88'}} className='tab d-flex justify-content-between align-items-center'>
      {historyVideos?.length>0?
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {historyVideos.map((item,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.url} target='_blank' style={{backgroundColor:'transparent'}}>{item.url}</a></td>
          <td>{item.timeStamp}</td>
          <td>
            <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon style={{backgroundColor:'transparent'}} icon={faTrashCan} /></button>
          </td>
        </tr>
        ))}
      </tbody>
    </table> :
    <p className='text-danger fs-4'>No Watch History</p>
    }
    </div>
    
    <div style={{backgroundColor:'#3dff88' }} className='line3 d-flex justify-content-center align-items-center'>
        <svg xmlns='http://www.w3.org/2000/svg' width='1000' height='250' viewBox='0 0 1015 30' fill='none'><path d='M1013 28C961.535 24.8162 962.429 12.4065 904.827 8.65109C867.133 6.19729 862.661 11.2896 784.173 14.8076C741.798 16.7337 700.027 18.6334 648.957 15.6871C581.744 11.8085 582.93 4.41191 536.623 4.2536C464.751 4.00735 455.14 21.8435 393.086 20.0845C328.89 18.3255 317.677 -1.33999 266.191 2.49461C220.738 5.88067 210.898 22.5735 172.58 20.0845C149.698 18.5982 143.873 12.0371 103.932 8.65109C91.0762 7.56051 80.5709 7.29666 64.4074 6.89209C43.6234 6.36826 22.784 6.36826 2 6.89209' stroke='#3dff88' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /></svg>
      </div>

      <ToastContainer position='top-center' theme='dark' autoClose={2000} />


    </>
  )
}

export default WatchHistory