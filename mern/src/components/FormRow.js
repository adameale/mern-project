const FormRow = ({type,name,handleChange,value,lableText}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} 
      className="form-label">
        {lableText|| name}

      </label>
      <input type={type} 
      value={value} name='name'
      onChange={handleChange}  
       className='form-input'/>

     </div>
  )
}

export default FormRow