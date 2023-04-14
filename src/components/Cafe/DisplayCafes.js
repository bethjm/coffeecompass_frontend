import React, { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import EditCafe from './EditCafe.js'

import "../../App.css"
import NavBar from '../NavBar.js'


const DisplayCafes = (props) => {


 return(
  <div className="DisplayCafe">

<NavBar/>
        {/* <p><Link to="/addcafe">Add Cafe</Link></p>
        <p><Link to="/">Home</Link></p> */}


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
            <h5 id="cafe-box">{cafes.flavor_notes}</h5>
            </div>
            <h5>{cafes.description}</h5>
            </div>
            </div>
            

     
                    // {/* <EditCafe handleUpdateCafe={props.handleUpdateCafe} cafes={cafes}/> */}
    //         {/* <button onClick={props.handleDeleteCafe} value={cafes.id}>
    //    X
    //  </button> */}

    
        )
      })}

</div>

 )

}

export default DisplayCafes
