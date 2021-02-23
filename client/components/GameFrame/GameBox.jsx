import React from 'react';
import Bubble from './Bubble.jsx';

var GameBox = ({possibleAnswers, potentialPoints, handleBubbleClick}) => {
    return (
        <div className="gameBoxWrapper">
            <div className="gameBox">
                {possibleAnswers.map((possibleAnswer, idx) => {
                    return <Bubble idx={idx} 
                                   value={possibleAnswer} 
                                   potentialPoints={potentialPoints}
                                   handleBubbleClick={handleBubbleClick}/>
                })}            
            </div>
        </div>
    )
}

export default GameBox;