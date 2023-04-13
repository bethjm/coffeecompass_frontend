import React, { useState, useEffect } from 'react'

import EditCafe from './EditCafe.js'


const DisplayCafes = (props) => {

let [cafe, setCafe] = useState([])


    {cafe.map((cafes) => {
        return (
          <div key={props.cafes.id}>
            <h4>Name: {props.cafes.name}</h4>
            <h5>Phone: {props.cafes.phone}</h5>
            {/* <EditCafe handleUpdateCafe={props.handleUpdateCafe}/> */}
            {/* OG FROM APP.JS <EditCafe handleUpdateCafe={props.handleUpdateCafe}  cafes={cafes}/> */}
            <button onClick={props.handleDeleteCafe} value={props.cafes.id}>
       X
     </button>
     
          </div>

    
        )
      })}





}

export default DisplayCafes
