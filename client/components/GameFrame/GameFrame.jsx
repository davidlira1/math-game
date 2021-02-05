import React, { useState } from 'react';
import Question from './Question.jsx';
import ShowLevel from './ShowLevel.jsx';
import MiddleFrame from './MiddleFrame.jsx';
import ShowPoints from './ShowPoints.jsx';
import GameBox from './GameBox.jsx';
import questionGenerator from './questionGenerator.js';
var potentialPoints = 10;

var GameFrame = () => {
    var [level, changeLevel] = useState(1);
    var [question, changeQuestion] = useState(questionGenerator(level));
    var [questionNum, changeQuestionNum] = useState(1);
    var [totalPoints, changeTotalPoints] = useState(0);

    var handleBubbleClick = (idx, value) => {
        //if right answer
        console.log('comes thru')
        if(value === question.answer) {
            console.log('runs through here');
            changeTotalPoints(totalPoints + potentialPoints);
            changeQuestionNum(questionNum + 1);
            changeQuestion(questionGenerator(level));
            potentialPoints = 10;
            //show the animation of the points on the bubble
        } else {
            potentialPoints-= 2;
            //if last try, potential points = 0
            //make bubble fly away
            console.log('idx', idx);
            document.querySelector(`.bubbleWrapper[idx="${idx}"]`).style.animation = 'flyAway 2s ease normal';
        }
    }
    console.log('RENDER')
    return (
        <div class="gameFrame">
            <ShowLevel level={level}/>
            <MiddleFrame question={question} handleBubbleClick={handleBubbleClick}/>
            <ShowPoints totalPoints={totalPoints}/>
        </div>
    )
}

export default GameFrame;