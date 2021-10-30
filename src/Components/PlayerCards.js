import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PlayerCards() {

    const [cards, setCards] = useState([]);

    const getCards = async () => {
        const response = await fetch('https://valorant-api.com/v1/playercards')
        const json = await response.json()
        setCards(json.data)
    }

    useEffect(() => {
        getCards();
    }, [])

    let cardList = cards.map((info) => {
        const {displayName, largeArt} = info
    
        return (
             <div className="playerCards">
                <h2 className="cardName">{displayName}</h2>
                <img src={largeArt} alt={displayName} className="cardImage" />
            </div>
        )
    })

    return (
        <div>
            <h1>Player Cards</h1>
        <div className="cardList">
            {cardList}
        </div>
        </div>
    )
}

export default PlayerCards;