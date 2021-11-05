import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSound from "use-sound";
import buttonClick from '../Sounds/422836__gamedevc__g-ui-button-hover-1.wav';

function AgentList() {

    const [agents, setAgents] = useState([]);
    const [sound] = useSound(buttonClick);

    const getAgents = async () => {
        const response = await fetch('https://valorant-api.com/v1/agents')
        const json = await response.json()
        setAgents(json.data)
    }

    useEffect(() => {
        getAgents();
    }, [])

    let agentList = agents.map((info) => {
        const {displayName, displayIcon, uuid} = info
    
        return (
            <Link to={'/agents/' + uuid} className="singleLink">
                <div className="agentCards" onMouseEnter={() => sound()}>
                    <h2 className="agentName">{displayName}</h2>
                    <img src={displayIcon} alt={displayName} className="agentImage" />
                </div>
            </Link>
        )
    })

    return (
        <div>
            <h1>Agents</h1>
        <div className="agentList">
            {agentList}
        </div>
        </div>
    )
}

export default AgentList;