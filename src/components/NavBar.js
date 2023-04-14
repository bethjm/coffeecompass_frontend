import "../App.css"

import { Link, Route, Routes } from 'react-router-dom'


const NavBar = (props) => {

    return(

<div className="NavBar">
<div className="logo-and-name">
<img className="coffee-cup-nav-bar" src="https://i.imgur.com/SGaOl83.png" alt="a coffee cup with steam coming out of the top"/>
<h1 className="nav-bar-title">coffee compass</h1>
</div>
    {/* <div className="search-bar">
        <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div> */}
</div>
    )


}


export default NavBar