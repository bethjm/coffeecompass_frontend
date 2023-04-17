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
    setModBeans(!seeFlavors);
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
            <h5 id="number-font">${cafes.price} USD</h5>

            <div className="cafe-flavor-notes">
            <button id="cafe-box" onClick={toggleAdd}>flavour notes</button>
            
            {seeFlavors && (
                      <div className="modal">
                      <div onClick={toggleAdd} className="overlay"></div>
                      <div className="modal-content" >
                        <p>sweetness <span id="number-font">{cafes.sweet}/5</span></p>
                        <p>acidic <span id="number-font">{cafes.acidic}/5</span></p>
                        <p>floral <span id="number-font">{cafes.floral}/5</span></p>
                        <p>citrus <span id="number-font">{cafes.citrus}/5</span></p>
                        <p>berry <span id="number-font">{cafes.berry}/5</span></p>
                        <p>chocolate <span id="number-font">{cafes.caramel}/5</span></p>
                        <p>caramel <span id="number-font">{cafes.caramel}/5</span></p>
                        <p>smoky <span id="number-font">{cafes.smoky}/5</span></p>
                        <p>bitter <span id="number-font">{cafes.bitter}/5</span></p>


                        <EditCafe handleUpdateCafe={props.handleUpdateCafe} cafes={cafes}/> 

                      <button className="close-modal" id="delete-button" onClick={toggleAdd}>
              X
            </button>
          </div>
        </div>
      )}

            </div>
            <h5 id="cafe-description">{cafes.description}</h5>
            <button id="delete-button" onClick={props.handleDeleteCafe} value={cafes.id}>
toss beans
</button> 
            </div>
            </div>
            

     

    
        )
      })}

</div>

 )

}

export default DisplayCafes
