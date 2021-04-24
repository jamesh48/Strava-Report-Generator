import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import styles from './App.css';

const Index = () => {
  return (
    <App styles={styles}/>
  )
};

ReactDOM.render(<Index/>, document.getElementById('root'));