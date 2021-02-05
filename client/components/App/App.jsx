import React from 'react';
import Header from '../Header/Header.jsx';
import GameFrame from '../GameFrame/GameFrame.jsx';
import styles from '../../styles.css';

var App = () => {
    return (
        <div class="app">
            {/* <Header/> */}
            <GameFrame/>
        </div>
    )
}

export default App;