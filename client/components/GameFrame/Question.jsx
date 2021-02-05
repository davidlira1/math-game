import React from 'react';

var Question = ({ numbers }) => {
    return (
        <div className="question">
            {numbers[0]} + {numbers[1]} =
        </div>
    )
}

export default Question;