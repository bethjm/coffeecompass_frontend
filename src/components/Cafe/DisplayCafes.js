import React, { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import EditCafe from './EditCafe.js'

import "../../App.css"


const DisplayCafes = (props) => {

  const [seeFlavors, setSeeFlavors] = useState(false);
  const [ModBeans, setModBeans] = useState(false);


  const toggleAdd = () => {
    setSeeFlavors(!seeFlavors);
  };

  const toggleMod = () => {
    setModBeans(!ModBeans);
  };

 return(
  <div className="DisplayCafe">

    {props.cafe.map((cafes) => {
        return (

          <div key={cafes.id} className="cafe-item">

            <div className="cafe-photo">
            <img src={cafes.photo} alt={"picture of " + cafes.name} />
            </div>

            <div className="cafe-details">
            <h4 id="cafe-name">{cafes.name}</h4>
            <h5 id="location">{cafes.address}</h5>
            <div className="cafe-flavor-notes">
            <button id="cafe-box" onClick={toggleAdd}>flavour notes</button>
            {seeFlavors && (
                      <div className="modal">
                      <div onClick={toggleAdd} className="overlay"></div>
                      <div className="modal-content">
                        <p>sweetness {cafes.sweet}</p>
                        <p>acidic {cafes.acidic}</p>
                        <p>floral {cafes.floral}</p>
                        <p>citrus {cafes.citrus}</p>

                        {/* <EditCafe handleUpdateCafe={props.handleUpdateCafe} cafes={cafes}/> 

<button id="delete-button" onClick={props.handleDeleteCafe} value={cafes.id}>
X
</button>  */}
<button onClick={toggleMod}>Edit beans</button>

                      <button className="close-modal" onClick={toggleAdd}>
              CLOSE
            </button>
          </div>
        </div>
      )}


            </div>
            <h5 id="cafe-description">{cafes.description}</h5>
            </div>
            </div>
            

     

    
        )
      })}

</div>

 )

}

export default DisplayCafes
