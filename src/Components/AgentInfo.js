import React, { useEffect, useState } from "react";

function AgentInfo({ match }) {

    const [info, setInfo] = useState([]);

    const getInfo = async () => {
        const response = await fetch(`https://valorant-api.com/v1/agents/${match.params.id}`)
        const json = await response.json()
        setInfo(json.data)
    }

    useEffect(() => {
        getInfo()
    }, [])

        return (
            <div className="agentInfo">
                <img src={info.fullPortrait} className="agentPicture" alt="agent" />
                <h1>{info.displayName}</h1>
                <p className="agentDescription">{info.description}</p>
            </div>
    )
}

export default AgentInfo;