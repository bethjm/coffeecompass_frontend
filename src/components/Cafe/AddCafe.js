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
        <label htmlFor="sweet">Sweetness level</label>
        <input type="text" name="sweet" value={cafe.sweet} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="acid">Acid level</label>
        <input type="text" name="acid" value={cafe.acid} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="floral">Floral level</label>
        <input type="text" name="floral" value={cafe.floral} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="citrus">Cirtus level</label>
        <input type="text" name="citrus" value={cafe.citrus} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="berry">Berry level</label>
        <input type="text" name="berry" value={cafe.berry} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="chocolate">Chocolate level</label>
        <input type="text" name="chocolate" value={cafe.chocolate} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="caramel">Caramel level</label>
        <input type="text" name="caramel" value={cafe.caramel} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="smoky">Smoky level</label>
        <input type="text" name="smoky" value={cafe.smoky} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="bitter">Bitter level</label>
        <input type="text" name="bitter" value={cafe.bitter} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="best_type">Best brew type</label>
        <input type="text" name="best_type" value={cafe.best_type} onChange={handleChangeCafe}/>
        <br />
        <br />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" value={cafe.price} onChange={handleChangeCafe}/>
        <br />
        <br />







        <input type="submit"/>
      </form>
    </>
  )
}

export default AddCafe
