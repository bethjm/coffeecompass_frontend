import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddCafe from './components/AddCafe.js'

const App = () => {
  let [cafe, setCafe] = useState([])

  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/shops/' + event.target.value)
      .then((response) => {
        getCafes()
      })
  }
  

  const handleCreateCafe = (addCafe) => {
    axios
      .post('http://localhost:8000/api/shops', addCafe)
      .then((response) => {
        console.log(response)
        getCafes()
      })
  }
  
const getCafes = () => {
 axios
   .get('http://localhost:8000/api/shops')
   .then(
     (response) => setCafe(response.data),
     (err) => console.error(err)
   )
   .catch((err) => console.error(err))
}


useEffect(() => {
 getCafes()
}, [])

  return (
    <>
      <h1>Hi</h1>
      <AddCafe handleCreateCafe={handleCreateCafe}/>
      <div >
 {cafe.map((shop) => {
   return (
     <div key={shop.id}>
       <h4>Name: {shop.name}</h4>
       <h5>Phone: {shop.phone}</h5>
       <button onClick={handleDelete} value={shop.id}>
  X
</button>

     </div>
   )
 })}
</div>

    </>
  )
}

export default App
