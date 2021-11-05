import React, { useEffect, useState } from "react";

function AgentInfo({ match }) {

    const [info, setInfo] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [roles, setRoles] = useState([]);

    const getInfo = async () => {
        const response = await fetch(`https://valorant-api.com/v1/agents/${match.params.id}`)
        const json = await response.json()
        setInfo(json.data)
        setAbilities(json.data.abilities)
        setRoles(json.data.role)
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
                <h1>Agent Information</h1>
                <div className="agentInfo">
                    <div className="agentImageContainer">
                        <img src={info.fullPortrait} className="agentPicture" alt="agent" />
                    </div>
                    <div className="descriptionContainer">
                        <h1>{info.displayName}'s Info</h1>
                        <div className="roleContainer">
                            <h3><img src={roles.displayIcon} className="agentRoleIcon" alt="role" />{roles.displayName}</h3>
                        </div>
                        <p className="agentDescription">{info.description}</p>
                        <h2 className="abilityTitle">Abilities</h2>
                        {abilitiesList}
                    </div>
                </div>
            </div>
    )
}

export default AgentInfo;