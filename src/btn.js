import React, {useContext} from 'react';
import {themeContext} from './context';

const Btn  = (props) => {
  const {theme}= useContext(themeContext);
  return (
    <div> Btn theme: {theme}</div>
  );
}

export default Btn;