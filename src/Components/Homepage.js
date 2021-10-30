import React from "react";
import { Link } from 'react-router-dom';

function Homepage() {

    return (
        <div>
        <h1>Valorant by Riot Games</h1>
        <Link to ={'/agents'} className="agentsLink">
            <button className="hpButton"><h1 className="linkText">agents</h1></button>
        </Link>
        </div>
    )
}

export default Homepage;