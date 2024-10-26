import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


function Login() {

    const [data, setData] = useState({
      email : "",
      password : ""
    })
    

    function change(e){
      const {name,value} = e.target
      setData({...data,[name] : value})
    }

    function display(){
        console.log(data)

    }
  return (
    <div className='loginPage'>
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='3'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name='email' onChange={change}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg1' type='password' size="lg" name='password' onChange={change}/>


          <MDBBtn className="mb-4 w-100" size="lg" onClick={display}>Log In</MDBBtn>
          <h6>Don't have an Account? <Link to={'/signup'}>Sign Up</Link></h6>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  )
}


export default Login