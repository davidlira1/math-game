import React, { useState, useEffect, useMemo } from 'react';
import { movement, roundNumToNearestMultiple } from './movement.js';

var intervals = [];
var interval;
var Bubble = ({ idx, value, potentialPoints, handleBubbleClick }) => {
    
    if(potentialPoints === 10) {
        var style = {
            left: roundNumToNearestMultiple(Math.random() * 75 + 2.5, 4) + '%',
            top: roundNumToNearestMultiple(Math.random() * 75 + 2.5, 4) + '%',
            width: '20%',
            height: '20%'
        
        }
    }

    useEffect(() => {
        if(intervals.length === 4 && potentialPoints === 10) {
            console.log('about to clear intervals');
            intervals.forEach(interval => {
                clearInterval(interval);
                
            });
            intervals = [];
        } 
        console.log('potentialPoints', potentialPoints)
        if(potentialPoints === 10) {
            var bubble = document.querySelector(`.bubbleWrapper[idx="${idx}"]`);
            interval = movement(bubble);
            intervals.push(interval);
        }

    });

    return useMemo(() => {
        return (
            <div style={style} className="bubbleWrapper" idx={idx} onClick={() => handleBubbleClick(idx, value)}>
                <div className="pointsEarned">{potentialPoints}</div>
                <div className="bubble"></div>
                <div className="bubbleValue">{value}</div> 
            </div>
        )

    }, [value])
}

export default Bubble;