import React from "react";
import { THEME_TYPE } from "../constants";
import {setTheme} from '../store/actions'
import { useDispatch } from "react-redux";

const ThemeSwitcher = ({themeModeRedux}) => {
   const dispatch= useDispatch()
  const themeMode = THEME_TYPE[themeModeRedux];
  const handleThemeChange = (e) => {
     const theme= e.target.getAttribute('data-testid') 
     dispatch(setTheme(theme))
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid={themeMode}
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">{themeMode} MODE</span>
    </div>
  );
};

export default ThemeSwitcher;
