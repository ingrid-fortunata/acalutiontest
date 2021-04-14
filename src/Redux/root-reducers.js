import { combineReducers } from "redux";
import winelistingReducer from "./winelisting/winelistingReducer";

export default combineReducers({
  wineList: winelistingReducer,
});
