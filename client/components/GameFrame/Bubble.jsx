import React, { useState, useEffect } from 'react';
import { movement, roundNumToNearest } from './movement.js';

var intervals = [];
var interval;
var Bubble = ({ idx, value, handleBubbleClick }) => {
    //var [interval, changeInterval] = useState(null);

    var style = {
        left: roundNumToNearest(Math.random() * 75 + 2.5, 5) + '%',
        top: roundNumToNearest(Math.random() * 75 + 2.5, 5) + '%',
        width: '20%',
        height: '20%'
    }

    useEffect(() => {
        if(intervals.length === 4) {
            intervals.forEach(interval => {
                clearInterval(interval);
                
            });
            intervals = [];
        }
        var bubble = document.querySelector(`.bubbleWrapper[idx="${idx}"]`);
        interval = movement(bubble);
        intervals.push(interval);
    });
    
    return (
        <div style={style} className="bubbleWrapper" idx={idx} onClick={() => handleBubbleClick(idx, value)}>
            <div className="bubble"></div>
            <div className="bubbleValue">{value}</div> 
        </div>
    )
}

export default Bubble;