import React, { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import AddCafe from './components/Cafe/AddCafe.js'
import EditCafe from './components/Cafe/EditCafe.js'
import DisplayCafes from './components/Cafe/DisplayCafes.js'
import LandingPage from './components/LandingPage.js'
// import AddComment from './components/Comments/AddComment.js'
// import EditComment from './components/Comments/EditComment.js'




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

let [comments, setComments] = useState([])

// const getPeople = () => {
//   axios
//     .get('http://localhost:8000/api/contacts')
//     .then(
//       (response) => setPeople(response.data),
//       (err) => console.error(err)
//     )
//     .catch((error) => console.error(error))
//  }

useEffect(() => {
 getCafes()
}, [])

  return (
    <>
<div className="add-app-page">
    <AddCafe handleCreateCafe={handleCreateCafe} />
    <DisplayCafes handleUpdateCafe={handleUpdateCafe} handleDeleteCafe={handleDeleteCafe} cafe={cafe}/>
    </div>
    <Routes>
      <Route path="/addcafe" element={<AddCafe handleCreateCafe={handleCreateCafe}/>}></Route>
      <Route path="/cafes" element={<DisplayCafes cafe={cafe}/>}></Route>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
    </>
  )
}

export default App
