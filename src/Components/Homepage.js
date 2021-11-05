import React from "react";
import { Link } from 'react-router-dom';
import useSound from "use-sound";
import buttonClick from '../Sounds/422836__gamedevc__g-ui-button-hover-1.wav';

function Homepage() {

    const [sound] = useSound(buttonClick);

    return (
        <div>
            <h1>Valorant by Riot Games</h1>
                <div className="buttonList">
        
                    <Link to ={'/agents'} className="singleLink">
                        <button className="hpButton" onMouseEnter={() => sound()}><h1 className="linkText">agents</h1></button>
                    </Link>
                    <Link to ={'/maps'} className="singleLink">
                        <button className="hpButton" onMouseEnter={() => sound()}><h1 className="linkText">maps</h1></button>
                    </Link>
                    <Link to ={'/weapons'} className="singleLink">
                        <button className="hpButton" onMouseEnter={() => sound()}><h1 className="linkText">weapons</h1></button>
                    </Link>
                    <Link to ={'/sprays'} className="singleLink">
                        <button className="hpButton" onMouseEnter={() => sound()}><h1 className="linkText">sprays</h1></button>
                    </Link>
                    <Link to ={'/playercards'} className="singleLink">
                        <button className="hpButton" onMouseEnter={() => sound()}><h1 className="linkText">player cards</h1></button>
                    </Link>
                </div>
        </div>
    )
}

export default Homepage;