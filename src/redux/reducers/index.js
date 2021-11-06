import { combineReducers } from "redux";
import postsStore from "./posts";
import universitiesStore from "./universities";
import postalAreaStore from "./postalLookup";

export default combineReducers({ postsStore, universitiesStore, postalAreaStore });