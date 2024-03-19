import React, { useState } from 'react'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Add.css'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { uploadVideoApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {

  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    id:"",
    caption:"",
    imageUrl:"",
    embedLink:""
  })

  console.log(video);
  const getEmbedLink = (e)=>{
    // console.log(e.target.value);
    const text=e.target.value
    if(text.endsWith('?feature=shared')){
      console.log(text.slice(-26, -15));
      const link = `https://www.youtube.com/embed/${text.slice(-26, -15)}`
      setVideo({...video,embedLink:link})
    }
    else if(text.startsWith('https://youtu.be/')){
      console.log(text.slice(17,28));
      const link = `https://www.youtube.com/embed/${text.slice(17,28)}`
      setVideo({...video,embedLink:link})
    }
    else if(text.startsWith('https://www.youtube.com/watch?v=')){
      console.log(text.slice(32,43));
      const link = `https://www.youtube.com/embed/${text.slice(32,43)}`
      setVideo({...video,embedLink:link})
    }
    else{
     console.log(text.slice(-11));
     const link = `https://www.youtube.com/embed/${text.slice(-11)}`
     setVideo({...video,embedLink:link})
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async()=>{
    const {id, caption, imageUrl, embedLink} = video
    console.log(id, caption, imageUrl, embedLink);
    if(!id || !caption || !imageUrl || !embedLink){
      toast.info('please fill the form completely')
    }
    else{
      const response = await uploadVideoApi(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('video uploaded successfully')
        
        setVideo({
          id:"",
          caption:"",
          imageUrl:"",
          embedLink:""
        })
        handleClose()
        setUploadVideoStatus(response?.data)
      }else{
        console.log(response);
        toast.error('Something went wrong')
      }
    }
  }

  return (
    <>
      <div className='d-flex'>
        <h5 className='upload mt-2'>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
      </div>

      <Modal style={{backgroundColor:'transparent'}} show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor:'#3dff88'}}  closeButton>
          <Modal.Title style={{fontFamily:'SpaceMono-Bold', color:'black'}}>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#3dff88'}} >
          <p className='mod'>Please fill the following details</p>

          <Form className='border rounded p-3 border-dark'>
            <Form.Group className='mb-3'>
              <Form.Control style={{fontFamily:'SpaceMono'}} type="text" placeholder="Enter the Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control style={{fontFamily:'SpaceMono'}} type="text" placeholder="Enter the Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control style={{fontFamily:'SpaceMono'}} type="text" placeholder="Enter the Video Image URL" onChange={(e)=>setVideo({...video,imageUrl:e.target.value})} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control style={{fontFamily:'SpaceMono'}} type="text" placeholder="Enter the Video Video Link" onChange={(e)=>getEmbedLink(e)} />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'#3dff88'}}>
          <Button style={{fontFamily:'SpaceMono', color:'black'}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{fontFamily:'SpaceMono', color:'black'}} variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='dark' autoClose={2000} />
    </>
  )
}

export default Add