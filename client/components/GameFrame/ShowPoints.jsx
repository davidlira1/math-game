import React from 'react';

var ShowPoints = ({ totalPoints }) => {
    return (
        <div class="showPoints">
            <div>Points</div>
            <div>{totalPoints}</div>
        </div>
    )
}

export default ShowPoints;