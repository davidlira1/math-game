import React from 'react';
import Question from './Question.jsx';
import GameBox from './GameBox.jsx';

var MiddleFrame = ({ question, handleBubbleClick }) => {
    return (
        <div class="middleFrame">
            <Question numbers={question.numbers}/>
            <GameBox answer={question.answer} possibleAnswers={question.possibleAnswers} handleBubbleClick={handleBubbleClick}/>
        </div>
    )
}

export default MiddleFrame;