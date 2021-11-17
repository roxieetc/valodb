import React, { useState, useEffect } from "react";

function BundlesList () {

    const [bundles, setBundles] = useState([]);

    const getBundles = async () => {
        const response = await fetch('https://valorant-api.com/v1/bundles')
        const json = await response.json()
        setBundles(json.data)
    }

    useEffect(() => {
        getBundles();
    }, [])

    let bundlesList = bundles.map((info) => {
        const {displayName, displayIcon2} = info
        
        return (
            <div className="Bundle">
            <h2 className="bundleName">{displayName}</h2>
            <img src={displayIcon2} alt={displayName} className="bundleImage" />
            </div>
        )
    })

    return (
        <div>
            <h1>Bundles</h1>
            <div className="bundleContainer">
                {bundlesList}
            </div>
        </div>
    )
}

export default BundlesList;