import React from 'react'
import './Signup.css'
import { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'


function Signup() {

    const [data,setData] = useState({
      username : "",
      email : "",
      password : "",
      repassword : ""
    })
    function change(e){
      const {name,value} = e.target
      setData({...data,[name]: value})

    }
    
    function display(){
        console.log(data)
    }



  return (
    
    
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url("images/sign.jpg")'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">SignUp</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'name='username' onChange={change}/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' name='email' onChange={change}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' name='password' onChange={change}/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' name='repassword' onChange={change}/>
          
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={display}>SignUp</MDBBtn>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <h5>Already have an Account ?  <Link to={'/'}>Log In </Link></h5>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>


  
  )
}

export default Signup