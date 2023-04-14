import React, { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import EditCafe from './EditCafe.js'

import "../../App.css"
import NavBar from '../NavBar.js'


const DisplayCafes = (props) => {


 return(
  <div className="DisplayCafe">

<NavBar/>
        <p><Link to="/addcafe">Add Cafe</Link></p>
        <p><Link to="/">Home</Link></p>


    {props.cafe.map((cafes) => {
        return (
          <div key={cafes.id}>
            <h4>Name: {cafes.name}</h4>
            <h5>Phone: {cafes.phone}</h5>
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
