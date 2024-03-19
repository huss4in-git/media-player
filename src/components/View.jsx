import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getCategoryApi, getUploadedVideoApi, updateCategory } from '../services/allAPI'
import './View.css'

function View({uploadVideoStatus, setVideoDragAndRemoveStatus}) {

  const [video, setVideo] = useState([])

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getVideos = async () => {
    const response = await getUploadedVideoApi()
    // console.log(response);
    const { data } = response /* object destructuring */
    // console.log(data);
    setVideo(data)
  }

  console.log(video);

  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e)=>{
    const {categoryId,videoId} = JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log(categoryId,videoId);

    // get all category
    const {data} = await getCategoryApi()
    // access the object with the category id from all category
    let selectedCategory = data.find((item)=>item.id==categoryId)
    // filtering the category object by removing the video object from the allvideos
    let result = selectedCategory.allVideos.filter((item)=>item.id!=videoId)
    console.log(result);
    let newCategory = {
      category:selectedCategory.category,allVideos:result,id:categoryId
    }
    // updating the category
    await updateCategory(categoryId,newCategory)
    setVideoDragAndRemoveStatus(true)

  }

  useEffect(() => { /* to handle side effect */
    getVideos()
    setDeleteVideoStatus(false)
  }, [uploadVideoStatus,deleteVideoStatus]) /* dependency -[] - content will be fetched when the page loads */

  return (
    <>
      <Row className='w-100 p-4' droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>

        { video?.length>0?

              video?.map((item)=>(
                  <Col sm={12} md={6} lg={4} xl={3}>
                  <VideoCard displayVideo = {item} setDeleteVideoStatus={setDeleteVideoStatus} />
              </Col>
              )):<p className='no'>No video Uploaded Yet</p>
          
        }

      </Row>
    </>
  )
}

export default View