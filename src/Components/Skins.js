import React, { useEffect, useState } from 'react';

function Skins({ match }) {

    const [skins, setSkins] = useState([]);

    const getSkins = async () => {
        const response = await fetch(`https://valorant-api.com/v1/weapons/${match.params.id}`)
        const json = await response.json()
        setSkins(json.data.skins)
        console.log(json.data.skins)
    }

    useEffect(() => {
        getSkins()
    }, [])

    let skinsList = skins.map((info) =>{
        const {displayName, displayIcon} = info
    

    return (
        <div className="skinCards">
        <h2 className="skinNames">{displayName}</h2>
        <img src={displayIcon} className="skinImages" alt="weapon" />
        </div>
    )
})

    return(
        <div>
        <h1>Available Skins</h1>
        <div className="skinsList">
        {skinsList}
        </div>
        </div>
    )
}

export default Skins;