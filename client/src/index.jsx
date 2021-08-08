import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import styles from './App.css';
import testData from './Test Data/testData.js';
import profileTestData from './Test Data/profileTestData.js';

const Index = () => {
  return (
    <App testData={testData} profileTestData={profileTestData} styles={styles}/>
  )
};

ReactDOM.render(<Index/>, document.getElementById('root'));