import React from 'react';
import {
  Button
} from 'antd-mobile';

import logo from './logo.svg';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">
          This is a button
        </Button>
      </div>
    );
  }
}

export default App;
