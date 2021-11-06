import { combineReducers } from "redux";
import postsStore from "./posts";
import universitiesStore from "./universities";


export default combineReducers({ postsStore, universitiesStore });