import React from 'react';
import "./styles.css";
import Toolbar from './tool-bar';
import {themeContext} from './context';


export default function App() {
  return (
    <themeContext.Provider value={{theme: 'dark'}}>
      <div className="App">
        <Toolbar />
      </div>
    </themeContext.Provider>
  );
}
