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
            <div>
                <h1>{info.displayName}'s Info</h1>
                <div className="agentInfo">
                    <div className="agentImageContainer">
                        <img src={info.fullPortrait} className="agentPicture" alt="agent" />
                    </div>
                    <p className="agentDescription">{info.description}</p>
                </div>
            </div>
    )
}

export default AgentInfo;