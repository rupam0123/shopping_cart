import React from 'react'
import { useState } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap'
import { useSelector ,useDispatch} from 'react-redux';
import {getAllUser, logIn} from '../actions';


export default function Login() {
  const data = useSelector((state) => state.logIn)
  const dispatch=useDispatch();
  
  const handleChange = (event) =>{
    dispatch(setAdd({...data,[event.target.name] : event.target.value}))
     }
  

  const handleClose = () =>{
    dispatch(logIn(false));
  }

  const handleShow=()=> {
    dispatch(logIn(true))
    
  }

  const handleSubmit=(e) =>{
    e.preventDefault()
    dispatch(getAllUser())

  }



  return (
    <>
    <div className="text-center">
      <Button variant="danger" onClick={handleShow}>
        Login
      </Button>
      </div>

      <Modal show={data.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="UserName" name="userName" autoComplete="off" 
          onChange={handleChange}/>
          <input type="password" placeholder="password" name="password"
          onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Log-in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}