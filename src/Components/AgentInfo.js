import React, { useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

function AgentInfo({ match }) {

    const [info, setInfo] = useState([]);
    const [abilities, setAbilities] = useState([]);

    const getInfo = async () => {
        const response = await fetch(`https://valorant-api.com/v1/agents/${match.params.id}`)
        const json = await response.json()
        setInfo(json.data)
        setAbilities(json.data.abilities)
    }

    useEffect(() => {
        getInfo()
    }, [])


    let abilitiesList = abilities.map((util) => {
        const {displayName, displayIcon} = util
        return (
            <div className="abilityList">
                <img src={displayIcon} className="abilityIcon" alt="ability" />
                <h3 className="abilityName">{displayName}</h3>
            </div>
        )
    })

        return (
            <div>
                
                <div className="agentInfo">
                    <div className="agentImageContainer">
                        <img src={info.fullPortrait} className="agentPicture" alt="agent" />
                    </div>
                    <div className="descriptionContainer">
                    <h1>{info.displayName}'s Info</h1>
                        <p className="agentDescription">{info.description}</p>
                        <h2>Abilities</h2>
                        {abilitiesList}
                    </div>
                </div>
            </div>
    )
}

export default AgentInfo;