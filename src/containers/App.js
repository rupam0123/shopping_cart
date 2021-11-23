import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ProductsContainer from './ProductsContainer' 
import CartContainer from './CartContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Login from './Login';


function App  () {
  
  return(
    <Login/>
  )
}




export default App
