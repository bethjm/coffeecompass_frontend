import { Link, Route, Routes } from 'react-router-dom'
import "../App.css"


const LandingPage = (props) => {

    return(
        <div className="LandingPage">
            <img className="landing-page-center-photo" src="https://i.imgur.com/UG7OmrE.png" alt="a compass with a coffee ring"/>
            <img className="landing-page-upper-photo" src="https://i.imgur.com/OU71JLH.png" alt="spotches of spilt coffee"/>
            <img className="landing-page-lower-photo" src="https://i.imgur.com/OU71JLH.png" alt="spotches of spilt coffee"/>

            <h2 className="landing-header">Welcome to Coffee Compass </h2>
            <h3 className="landing-text" >we'll point you in the direction of your perfect cup</h3>
                <button className="see-all-button"><Link to="/cafes" id="remove-under-line">FIND BEANS</Link></button>



        </div>
    )
}

export default LandingPage