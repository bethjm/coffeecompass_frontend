import React, { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import AddCafe from './components/AddCafe.js'
import EditCafe from './components/EditCafe.js'
import DisplayCafes from './components/DisplayCafes.js'
import LandingPage from './components/LandingPage.js'



const App = () => {
  let [cafe, setCafe] = useState([])

  const handleDeleteCafe = (event) => {
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
    <nav>
      <ul>
        <li><Link to="/addcafe">Add Cafe</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/cafes">See All Cafes</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/addcafe" element={<AddCafe handleCreateCafe={handleCreateCafe}/>}/>
      <Route path="/home" element={<LandingPage/>}/>
      <Route path="/cafes" element={<DisplayCafes handleUpdateCafe={handleUpdateCafe} handleDeleteCafe={handleDeleteCafe} />}/>

    </Routes>

      <h1>App.js</h1>
    </>
  )
}

export default App
