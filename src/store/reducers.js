// # Reducer name should be **themeReducer**
import { THEME_TYPE } from "../constants/index";

const initaileState = {
  theme: THEME_TYPE.DARK,
};
export const themeReducer = (state = initaileState, action) => {
  switch (action.type) {
    case 'THEME_TYPE.LIGHT':
      return {
        ...state,
        theme: THEME_TYPE.DARK,
      };

    case 'THEME_TYPE.DARK':
      return {
        ...state,
        theme: THEME_TYPE.LIGHT,
      };
    default:
      return state;
  }
};
