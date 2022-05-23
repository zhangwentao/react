import React from 'react';
import Btn from './btn';
import {themeContext} from './context';

const ToolBar = (props) => {
  return (
    <themeContext.Consumer>
    {
      value => (
        <div>
          <div> Toolbar Theme: {value.theme}</div>
          <Btn />
        </div>
      )
    }
    </themeContext.Consumer>
  )
}

export default ToolBar;