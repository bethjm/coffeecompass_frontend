import React, { useState, useEffect } from 'react'

import EditCafe from './EditCafe.js'


const DisplayCafes = (props) => {


 return(
  <>

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

</>

 )

}

export default DisplayCafes
