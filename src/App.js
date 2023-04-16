import React, { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import AddCafe from './components/Cafe/AddCafe.js'
import EditCafe from './components/Cafe/EditCafe.js'
import DisplayCafes from './components/Cafe/DisplayCafes.js'
import LandingPage from './components/LandingPage.js'




const App = () => {
  // ========CAFE==========
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

// ========COMMENTS==========


useEffect(() => {
 getCafes()
}, [])

  return (
    <>


<div className="NavBar">
<div className="logo-and-name">
<img className="coffee-cup-nav-bar" src="https://i.imgur.com/SGaOl83.png" alt="a coffee cup with steam coming out of the top"/>
<h1 className="nav-bar-title">coffee compass</h1>
<nav>
      <ul>
        <li><Link to="/addcafe">Add Cafe</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cafes">See All Cafes</Link></li>
      </ul>
    </nav>

    </div>
</div>

    <Routes>
      <Route path="/addcafe" element={<AddCafe handleCreateCafe={handleCreateCafe}/>}/>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/cafes" element={<DisplayCafes handleUpdateCafe={handleUpdateCafe} handleDeleteCafe={handleDeleteCafe} cafe={cafe}/>}/>

    </Routes>


    </>
  )
}

export default App
