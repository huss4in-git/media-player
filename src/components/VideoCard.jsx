import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VideoCard.css'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddToHistory, deleteAVideo } from '../services/allAPI';


function VideoCard({displayVideo, setDeleteVideoStatus, isPresent}) {
  console.log(displayVideo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // function to add to history
  const handleShow = async() => {
    setShow(true);
    let caption = displayVideo.caption
    let url = displayVideo.embedLink
    let time = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-GB', {year:'numeric', month:'2-digit', day:'2-digit', hour: '2-digit', minute:'2-digit', second:'2-digit'}).format(time)
    console.log(caption,url,timeStamp);
    let reqBody = {
      caption,url,timeStamp
    }
    const response = await AddToHistory(reqBody)
    console.log(response);
  } 

  // function to delete a video

  const handleDelete = async(id) => {
    const response = await deleteAVideo(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }

  // funtion to drag

  const videoDrag = (e, id)=>{
    console.log(`card with id ${id} have dragged`);
    e.dataTransfer.setData("VideoId",id)
  }

  return (
    <>
      <Card onClick={handleShow} style={{ width: '100%', borderColor: 'black',backgroundColor:'#3dff88' }} className='mt-4 border-2' draggable onDragStart={(e)=>videoDrag(e,displayVideo.id)}>
        {!isPresent && <Card.Img onClick={handleShow} variant="top" src={displayVideo?.imageUrl} width={'100%'} height={'250px'} />}
        <Card.Body>
          <Card.Text style={{ fontFamily: 'SpaceMono', color: 'black' }}>
            {displayVideo?.caption.slice(0,19)}
          </Card.Text>
          {!isPresent && <Button variant="danger" onClick={()=>handleDelete(displayVideo?.id)} className='ms-auto'><FontAwesomeIcon style={{ backgroundColor: 'transparent' }} icon={faTrashCan} /></Button>}
        </Card.Body>
      </Card>

      <Modal style={{ backgroundColor: 'transparent' }} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${displayVideo?.embedLink}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
