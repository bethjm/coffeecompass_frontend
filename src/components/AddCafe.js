import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const AddCafe = (props) => {
  let emptyCafe = { photo: '', name: '', phone: '', online_order: '', address: '', description: '', flavour_notes: '' }
  const [cafe, setCafe] = useState(emptyCafe)

  const handleChange = (event) => {
    setCafe({ ...cafe, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(cafe)
  }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label htmlFor="photo">Photo: </label>
        <input type="text" name="photo" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="phone">Phone Number: </label>
        <input type="text" name="phone" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="online_order">Link to order online: </label>
        <input type="text" name="online_order" />
        <br />
        <br />
        <label htmlFor="address">Address: </label>
        <input type="text" name="address" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="flavour_notes">Flavour notes: </label>
        <input type="text" name="flavour_notes" onChange={handleChange}/>
        <br />
        <br />
        <input type="submit"/>
      </form>
    </>
  )
}

export default AddCafe
