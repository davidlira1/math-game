import React from 'react';
import Subject from './SubjectBox.jsx';

var changeSubjectBox = () => {
    var subjects = ['+', '-', 'x', '/'];
    
    return (
        <div className="chooseSubjectBox">
            {subjects.map(subject => {
                <Subject subject="subject"/>
            })}
        </div>
    )
}

export default changeSubject;