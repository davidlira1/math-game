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
    var [potentialPoints, changePotentialPoints] = useState(10);

    var handleBubbleClick = (idx, value) => {
        //if right answer
        console.log('comes thru')
        if(value === question.answer) {
            console.log('runs through here');
            changeTotalPoints(totalPoints + potentialPoints);
            changeQuestionNum(questionNum + 1);
            changeQuestion(questionGenerator(level));
            document.querySelectorAll('.bubbleWrapper').forEach(bubble => {
                bubble.classList.remove('vanish');
            })
            
            potentialPoints = 10;
            changePotentialPoints(10);
            //show the animation of the points on the bubble
        } else {
            potentialPoints-= 2;
            changePotentialPoints(--potentialPoints);
            //if last try, potential points = 0
            //make bubble fly away
            console.log('idx', idx);
            document.querySelector(`.bubbleWrapper[idx="${idx}"]`).classList.add('vanish');
        }
    }
 
    return (
        <div class="gameFrame">
            <ShowLevel level={level}/>
            <MiddleFrame question={question} 
                         handleBubbleClick={handleBubbleClick}
                         potentialPoints={potentialPoints}/>
            <ShowPoints totalPoints={totalPoints}/>
        </div>
    )
}

export default GameFrame;