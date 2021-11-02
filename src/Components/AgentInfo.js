import React, { useEffect, useState } from "react";

function AgentInfo({ match }) {

    const [info, setInfo] = useState([]);

    const getInfo = async () => {
        const response = await fetch(`https://valorant-api.com/v1/agents/${match.params.id}`)
        const json = await response.json()
        console.log(json.data)
        setInfo(json.data)
    }

    useEffect(() => {
        getInfo()
    }, [])

        return (
            <div>
                <h1>{info.displayName}</h1>
                <img src={info.fullPortrait} alt="agent" />
                <p>{info.description}</p>
            </div>
    )
}

export default AgentInfo;