import "../App.css"

import { Link, Route, Routes } from 'react-router-dom'


const NavBar = (props) => {

    return(



<div className="NavBar">
<div className="logo-and-name">
<img className="coffee-cup-nav-bar" src="https://i.imgur.com/SGaOl83.png" alt="a coffee cup with steam coming out of the top"/>
<button className=""><Link to="/" id="remove-under-line"><h1 className="nav-bar-title">coffee compass</h1></Link></button>

<button className=""><Link to="/cafes" id="remove-under-line">see cafes</Link></button>
  <button className=""><Link to="/addcafe" id="remove-under-line">add</Link></button>
</div>

</div> 


    )


}


export default NavBar