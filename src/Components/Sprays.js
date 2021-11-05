import React, { useState, useEffect } from 'react';

function SpraysList() {

    const [sprays, setSprays] = useState([]);

    const getSprays = async () => {
        const response = await fetch('https://valorant-api.com/v1/sprays')
        const json = await response.json()
        setSprays(json.data)
    }

    useEffect(() => {
        getSprays();
    }, [])

    let sprayList = sprays.map((info) => {
        const {displayName, fullTransparentIcon} = info
    
        return (
                <div className="sprayCards">
                    <h2 className="sprayName">{displayName}</h2>
                    <img src={fullTransparentIcon} alt={displayName} className="sprayImage" />
                </div>
        )
    })

    return (
        <div>
            <h1>Sprays</h1>
        <div className="sprayList">
            {sprayList}
        </div>
        </div>
    )
}

export default SpraysList;