import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function WeaponsList() {

    const [weapons, setWeapons] = useState([]);

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
                <div className="weaponCards">
                    <h2 className="weaponName">{displayName}</h2>
                    <img src={displayIcon} alt={displayName} className="weaponImage" />
                </div>
            </Link>
        )
    })

    return (
        <div>
            <h1>Weapons</h1>
            <Link to={'/bundles'}>
            <button className="bundlesButton">Weapon Bundles</button>
            </Link>
        <div className="weaponList">
            {weaponList}
        </div>
        </div>
    )
}

export default WeaponsList;