import {createStore} from "redux";
import {reducers} from "./combineReducer";
import {middleware} from "./middleware";

export const store = createStore(reducers, middleware)

