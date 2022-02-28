import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import NameBox from "./components/NameBox";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { THEME_TYPE } from "./constants";
import Styles from "./data/Styles";

// No need to change *return* part in both StyleTag and App components
// You have to set themeMode based on redux state

export const StyleTag = ({themeModeRedux}) => {
  const themeMode = THEME_TYPE[themeModeRedux];
  return (
    <Helmet>
      <style>{Styles(themeMode)}</style>
    </Helmet>
  );
};

export function App() {
  let themeMode= useSelector(state=>state.theme)
  return (
    <>
      <StyleTag themeModeRedux={themeMode}/>
      <NameBox />
      <ThemeSwitcher themeModeRedux={themeMode}/>
    </>
  );
}

