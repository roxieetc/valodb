import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSound from "use-sound";
import buttonClick from '../Sounds/422836__gamedevc__g-ui-button-hover-1.wav';

function WeaponsList() {

    const [weapons, setWeapons] = useState([]);
    const [sound] = useSound(buttonClick);

    const getWeapons = async () => {
        const response = await fetch('https://valorant-api.com/v1/weapons')
        const json = await response.json()
        setWeapons(json.data)
    }

    useEffect(() => {
        getWeapons();
    }, [])

    let weaponList = weapons.map((info) => {
        const {displayName, displayIcon, uuid} = info
    
        return (
            <Link to={'/weapons/' + uuid} className="singleLink">
                <div className="weaponCards" onMouseEnter={() => sound()}>
                    <h2 className="weaponName">{displayName}</h2>
                    <img src={displayIcon} alt={displayName} className="weaponImage" />
                </div>
            </Link>
        )
    })

    return (
        <div>
            <h1>Weapons</h1>
        <div className="weaponList">
            {weaponList}
        </div>
        </div>
    )
}

export default WeaponsList;