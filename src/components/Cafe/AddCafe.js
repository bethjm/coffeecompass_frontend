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


<img  className="edit-coffee-bag" src="https://i.imgur.com/UNmt9M3.png" alt="blank bag of coffee"/>

      <form onSubmit={handleSubmitCafe}>
        <input id="add-photo" htmlFor="photo" type="text" name="photo" value={cafe.photo} placeholder="photo of bag" onChange={handleChangeCafe}/>
        <input id="add-name" htmlFor="name"type="text" name="name" value={cafe.name} placeholder="name of bag" onChange={handleChangeCafe} />
        <input id="add-online" htmlFor="online_order" type="text" name="online_order" placeholder="link to order online" value={cafe.online_order} onChange={handleChangeCafe}/>
        <input id="add-address" type="text" htmlFor="address" name="address" value={cafe.address} placeholder="address of cafe" onChange={handleChangeCafe}/>
        <textarea  name="description" id="add-description" rows="6" cols="18" type="text" htmlFor="description" placeholder="describe the beans" value={cafe.description} onChange={handleChangeCafe}/>
        <input id="add-price" type="number" htmlFor="price" name="price" placeholder="price of beans" value={cafe.price} onChange={handleChangeCafe}/>
        <input type="submit" id="add-submit"/>
      </form>
    </>
  )
}

export default AddCafe
