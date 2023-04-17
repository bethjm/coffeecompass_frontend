import React, { useState } from 'react'

const EditCafe = (props) => {
    const [cafe, setCafe] = useState({...props.cafes})

    const handleChangeCafe = (event) => {
        setCafe({ ...cafe, [event.target.name]: event.target.value })
      }
      
      const handleSubmitCafe = (event) => {
        event.preventDefault()
        props.handleUpdateCafe(cafe)
      }
      

  return (
    <>
      <details>
        <summary>Add Flavor Notes</summary>
        <form className="edit-form" onSubmit={handleSubmitCafe}>
        <label htmlFor="sweet">Sweetness level</label>
        <input type="number" min="0" max="5" name="sweet" value={cafe.sweet} onChange={handleChangeCafe}/> <span id="number-font"></span>/5
        <br />
        <br />
        <label htmlFor="acidic">Acid level</label>
        <input type="number" min="0" max="5"  name="acidic" value={cafe.acidic} onChange={handleChangeCafe}/> <span id="number-font">/5</span>
        <br />
        <br />
        <label htmlFor="floral">Floral level</label>
        <input type="number" min="0" max="5"  name="floral" value={cafe.floral} onChange={handleChangeCafe}/> <span id="number-font">/5</span>
        <br />
        <br />
        <label htmlFor="citrus">Cirtus level</label>
        <input type="number" min="0" max="5"  name="citrus" value={cafe.citrus} onChange={handleChangeCafe}/> <span id="number-font">/5</span>
        <br />
        <br />
        <label htmlFor="berry">Berry level</label>
        <input type="number" min="0" max="5"  name="berry" value={cafe.berry} onChange={handleChangeCafe}/> <span id="number-font">/5</span>
        <br />
        <br />
        <label htmlFor="chocolate">Chocolate level</label>
        <input type="number" min="0" max="5"  name="chocolate" value={cafe.chocolate} onChange={handleChangeCafe}/> <span id="number-font">/5</span>
        <br />
        <br />
        <label htmlFor="caramel">Caramel level</label>
        <input type="number" min="0" max="5"  name="caramel" value={cafe.caramel} onChange={handleChangeCafe}/> <span id="number-font">/5</span>
        <br />
        <br />
        <label htmlFor="smoky">Smoky level</label>
        <input type="number" min="0" max="5"  name="smoky" value={cafe.smoky} onChange={handleChangeCafe}/> <span id="number-font">/5</span>
        <br />
        <br />
        <label htmlFor="bitter">Bitter level</label>
        <input type="number" min="0" max="5"  name="bitter" value={cafe.bitter} onChange={handleChangeCafe}/> <span id="number-font">/5</span>
        <br />
        <br />
        <input type="submit"/>
      </form>
      </details>
    </>
  )
}

export default EditCafe
