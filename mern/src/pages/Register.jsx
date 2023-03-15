import { useState, useEffect } from "react"
import { Logo,FormRow,Alert } from "../components"
import Wrapper from "../Assets/Wrappers/RegisterPage"
import { useAppContext } from '../context/AppContext';


const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
 
}


const Register = () => {
  const [values,setValues] =useState(initialState)
  const {isLoading,showAlert,displayAlert } =useAppContext()
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
    console.log(values);
  }
  
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