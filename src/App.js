import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

const getCafes = () => {
 axios
   .get('http://localhost:8000/api/shops')
   .then(
     (response) => setCafe(response.data),
     (err) => console.error(err)
   )
   .catch((error) => console.error(error))
}


  let [cafe, setCafe] = useState([])

useEffect(() => {
 getCafes()
}, [])

  return (
    <>
      <h1>Hi</h1>
      <div >
 {cafe.map((shop) => {
   return (
     <div key={shop.id}>
       <h4>Name: {shop.name}</h4>
       <h5>Phone: {shop.phone}</h5>
     </div>
   )
 })}
</div>

    </>
  )
}

export default App
