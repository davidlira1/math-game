import React from 'react';
import SubjectBox from './SubjectBox.jsx';
import styles from '../../styles/ChooseSubject.css';

var ChooseSubject = () => {
    var subjects = ['+', '-', 'x', '/'];
    
    return (
        <div className="chooseSubject">
            {subjects.map(subject => {
                return <SubjectBox subject={subject}/>
            })}
        </div>
    )
}

export default ChooseSubject;