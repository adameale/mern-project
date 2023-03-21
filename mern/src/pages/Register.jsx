import { useState, useEffect } from "react"
import { Logo,FormRow,Alert } from "../components"
import Wrapper from "../Assets/Wrappers/RegisterPage"
import { useAppContext } from '../context/AppContext';
import {useNavigate} from 'react-router-dom'


const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
 
}


const Register = () => {
  const navigate= useNavigate()
  const [values,setValues] =useState(initialState)

  const {user,isLoading,showAlert,displayAlert, registerUser } =useAppContext();
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit =(e) => {
    e.preventDefault()
    const {name,email,password,isMember } =values
    if(!email || !password||(!isMember && !name)){
      displayAlert()
      return
    }
    const currentUser= {name,email,password}
    if(isMember){
      console.log('already a member');
    } else {
      registerUser(currentUser)
    }
   
  }
  useEffect( () =>{
    if(user){
      setTimeout(() =>{
        navigate('/Landing')
      },300)
    }
  },[user, navigate])
  
  return (
   <Wrapper  className='full-page'>
    <form className="form" onSubmit={onSubmit}>
      <Logo />
      <h3>
        {values.isMember ? 'Register':'Login'}
      </h3>
      {showAlert && <Alert />}
      {values.isMember && (
    <FormRow 
    type='text'
     name='name'
      value={values.name}
      handleChange={handleChange}
       />
       )}
<FormRow 
    type='email'
     name='email'
      value={values.email}
      handleChange={handleChange}
       />
       <FormRow 
    type='password'
     name='password'
      value={values.password}
      handleChange={handleChange}
       />

<button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
      <p> {values.isMember ?'already a member ?' :'not  a member yet'}
         <button type="button" 
      onClick={toggleMember} 
      className='member-btn'> 
      {values.isMember ? 'Login' :'Register'}
      </button></p>
    
</form></Wrapper>
  
  )
}

export default Register