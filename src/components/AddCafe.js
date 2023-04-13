import React, { useState, useEffect } from 'react'

const AddCafe = (props) => {

  let emptyCafe = { photo: '', name: '', phone: '', online_order: '', address: '', description: '', flavor_notes: '' }
  const [cafe, setCafe] = useState(emptyCafe)

  const handleChangeCafe = (event) => {
    setCafe({ ...cafe, [event.target.name]: event.target.value })
  }
  
  const handleSubmitCafe = (event) => {
    event.preventDefault()
    props.handleCreateCafe(cafe)
  }

  return (
    <>
      <form onSubmit={handleSubmitCafe}>
      <label htmlFor="photo">Photo: </label>
        <input type="text" name="photo" value={cafe.photo} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={cafe.name} onChange={handleChangeCafe} />
        <br />
        <br />
        <label htmlFor="phone">Phone Number: </label>
        <input type="number" name="phone" value={cafe.phone} onChange={handleChangeCafe} />
        <br />
        <br />
        <label htmlFor="online_order">Link to order online: </label>
        <input type="text" name="online_order" value={cafe.online_order} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="address">Address: </label>
        <input type="text" name="address" value={cafe.address} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" value={cafe.description} onChange={handleChangeCafe} />
        <br />
        <br />
        <label htmlFor="flavor_notes">Flavor notes: </label>
        <input type="text" name="flavor_notes" value={cafe.flavor_notes} onChange={handleChangeCafe}/>
        <br />
        <br />
        <input type="submit"/>
      </form>
    </>
  )
}

export default AddCafe
