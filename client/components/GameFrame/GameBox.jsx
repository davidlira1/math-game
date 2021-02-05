import React from 'react';
import Bubble from './Bubble.jsx';

var GameBox = ({possibleAnswers, handleBubbleClick}) => {
    return (
        <div className="gameBoxWrapper">
            <div className="gameBox">
                {possibleAnswers.map((possibleAnswer, idx) => {
                    return <Bubble value={possibleAnswer} idx={idx} handleBubbleClick={handleBubbleClick}/>
                })}            
            </div>
        </div>
    )
}

export default GameBox;