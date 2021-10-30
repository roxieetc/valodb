import React from "react";
import { Link } from 'react-router-dom';

function Homepage() {

    return (
        <div>
        <h1>Valorant by Riot Games</h1>
        <Link to ={'/agents'} className="agentsLink">
            <button className="hpButton"><h1 className="linkText">agents</h1></button>
        </Link>
        <Link to ={'/maps'} className="mapsLink">
            <button className="hpButton"><h1 className="linkText">maps</h1></button>
        </Link>
        <Link to ={'/weapons'} className="weaponsLink">
            <button className="hpButton"><h1 className="linkText">weapons</h1></button>
        </Link>
        <Link to ={'/playercards'} className="cardsLink">
            <button className="hpButton"><h1 className="linkText">player cards</h1></button>
        </Link>
        </div>
    )
}

export default Homepage;