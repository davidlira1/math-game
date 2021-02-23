import React from 'react';
import Header from '../Header/Header.jsx';
import ChooseSubject from '../ChooseSubject/ChooseSubject.jsx'
import GameFrame from '../GameFrame/GameFrame.jsx';
import Footer from '../Footer/Footer.jsx';
import styles from '../../styles/styles.css';

var App = () => {
    return (
        <div className="app">
            {/* <Header/> */}
            {/* <GameFrame/> */}
            <ChooseSubject />
            {/* <Footer/> */}
        </div>
    )
}

export default App;