import React from 'react';
import Question from './Question.jsx';
import GameBox from './GameBox.jsx';

var MiddleFrame = ({ question, potentialPoints, handleBubbleClick }) => {
    return (
        <div class="middleFrame">
            <Question numbers={question.numbers}/>
            <GameBox answer={question.answer} 
                     possibleAnswers={question.possibleAnswers} 
                     potentialPoints={potentialPoints}
                     handleBubbleClick={handleBubbleClick}/>
        </div>
    )
}

export default MiddleFrame;