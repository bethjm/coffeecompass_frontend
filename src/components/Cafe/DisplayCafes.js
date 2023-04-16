import React, { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import EditCafe from './EditCafe.js'

import "../../App.css"
import NavBar from '../NavBar.js'


const DisplayCafes = (props) => {

  const [seeFlavors, setSeeFlavors] = useState(false);

  const toggleAdd = () => {
    setSeeFlavors(!seeFlavors);
  };

 return(
  <div className="DisplayCafe">

<NavBar/>


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
            <button id="cafe-box" onClick={toggleAdd}>flavours</button>
            {seeFlavors && (
                      <div className="modal">
                      <div onClick={toggleAdd} className="overlay"></div>
                      <div className="modal-content">
                        <div>I am modal</div>
                      <button className="close-modal" onClick={toggleAdd}>
              CLOSE
            </button>
          </div>
        </div>
      )}


            </div>
            <h5 id="cafe-description">{cafes.description}</h5>
            </div>
            <EditCafe handleUpdateCafe={props.handleUpdateCafe} cafes={cafes}/>
           <button onClick={props.handleDeleteCafe} value={cafes.id}>
      X
    </button> 
            </div>
            

    

    
        )
      })}

</div>

 )

}

export default DisplayCafes
