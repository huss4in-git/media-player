import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Category.css'
import VideoCard from '../components/VideoCard'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import { addCategoryApi, deleteCategoryApi, getAVideoApi, getCategoryApi, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({videoDragAndRemoveStatus ,setVideoDragAndRemoveStatus}) {

  // state to store the category name

  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStatus, setAddCategoryStatus] = useState(false)
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryName);

  // function to add category
  const handleCategoryAdd = async () => {

    if (categoryName) {
      let reqBody = {
        categoryName: categoryName,
        allVideos: []
      }

      const response = await addCategoryApi(reqBody)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        alert('Category added successfully')
        handleClose()
      }
      else {
        alert('Something went wrong')
      }
    }
    else {
      alert('Please enter the Category Name')
    }
  }

  // function to get category

  const getAllCategory = async () => {
    const response = await getCategoryApi()
    // console.log(response.data);
    setAllCategory(response.data)
  }

  // function to delete category

  const handleDeleteCategory = async (id) => {
    await deleteCategoryApi(id)
    setDeleteCategoryStatus(true)
  }

  console.log(allCategory);

  // function to prevent the data lose on drag

  const dragOver = (e) => {
    e.preventDefault()
  }

  // function for drop

  const videoDrop = async (e, categoryId) => {
    console.log(`category id is ${categoryId}`);

    // get the videoid send from the videoCard component
    const videoid = e.dataTransfer.getData("VideoId")
    console.log(`video is ${videoid}`);

    // api call to get details of a particular video that is dragged
    const { data } = await getAVideoApi(videoid)
    console.log(data);

    // selected category
    const selectedCategory = allCategory.find((item)=>item.id==categoryId)
    console.log(selectedCategory);

    if(selectedCategory.allVideos.find(item=>item.id==videoid)){
      toast.error('Video already exist in the same category')
    }else{
      selectedCategory.allVideos.push(data)
    }

    // function to update category
    await updateCategory(categoryId, selectedCategory)

    getAllCategory()
  }

  // function to delete cards from category
  const dragStart = (e,categoryId,videoId)=>{
    console.log(`category id is ${categoryId}`);
    console.log(`video id is ${videoId}`);

    let dataShared ={
      categoryId,videoId
    }
    e.dataTransfer.setData("dataShared",JSON.stringify(dataShared))
  }



  useEffect(() => {
    getAllCategory()
    setDeleteCategoryStatus(false)
    setAddCategoryStatus(false)
    setVideoDragAndRemoveStatus(false)
  }, [addCategoryStatus, deleteCategoryStatus, videoDragAndRemoveStatus])

  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-4 mb-5'>
        <button style={{ fontFamily: 'SpaceMono', color: 'black' }} onClick={handleShow} className='btn btn-success w-100 '>Add new Category</button>
      </div>

      <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
        <Modal.Header style={{ backgroundColor: '#3dff88' }} closeButton>
          <Modal.Title ></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#3dff88' }} >
          <p className='cat'>Category Name</p>
          <Form className='border rounded p-3 border-dark'>
            <Form.Group className='mb-3'>
              <Form.Control style={{ fontFamily: 'SpaceMono' }} type="text" placeholder="Enter the Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#3dff88' }}>
          <Button style={{ fontFamily: 'SpaceMono', color: 'black' }} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ fontFamily: 'SpaceMono', color: 'black' }} variant="primary" onClick={handleCategoryAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length > 0 ?
        allCategory?.map((item) => (
          <div className='border border-2 border-black w-100 p-3 rounded mt-3' droppable on onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item.id)}>
            <div className='d-flex justify-content-center align-items-center'>
              <p className='cat'>{item.categoryName}</p>
              <button onClick={() => handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon style={{ backgroundColor: 'transparent' }} icon={faTrashCan} /></button>
            </div>
            <Row>
              {item.allVideos.length>0?
              item.allVideos.map((card)=>(<Col sm={12} draggable onDragStart={(e)=>dragStart(e, item.id, card.id)}>
                <VideoCard displayVideo ={card} isPresent={true}/>
              </Col>))
                :null}
            </Row>
          </div>))
        : <p className='text-danger mt-5'>No Category Added Yet</p>
      }
<br />
<br />
<ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Category