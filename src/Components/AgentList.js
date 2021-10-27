import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AgentList() {

    const [agents, setAgents] = useState([]);

    const getAgents = async () => {
        const response = await fetch('https://valorant-api.com/v1/agents')
        const json = await response.json()
        setAgents(json.data)
    }

    useEffect(() => {
        getAgents();
    }, [])

    let agentList = agents.map((info) => {
        const {displayName, fullPortrait} = info
    
        return (
             <div className="agentCards">
                <h2 className="agentName">{displayName}</h2>
                <img src={fullPortrait} alt={displayName} className="agentImage" />
            </div>
        )
    })

    return (
        <div className="agentList">
            {agentList}
        </div>
    )
}

export default AgentList;