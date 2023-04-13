import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddCafe from './components/AddCafe.js'
import EditCafe from './components/EditCafe.js'

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


const handleUpdateCafe = (editCafe) => {
  console.log(editCafe)
  axios
    .put('http://localhost:8000/api/shops/' + editCafe.id, editCafe)
    .then((response) => {
      getCafes()
    })
}


useEffect(() => {
 getCafes()
}, [])

  return (
    <>
      <h1>Hi</h1>
      <AddCafe handleCreateCafe={handleCreateCafe}/>
      <div >
 {cafe.map((cafes) => {
   return (
     <div key={cafes.id}>
       <h4>Name: {cafes.name}</h4>
       <h5>Phone: {cafes.phone}</h5>
       <EditCafe handleUpdateCafe={handleUpdateCafe} cafes={cafes}/>
       <button onClick={handleDelete} value={cafes.id}>
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
