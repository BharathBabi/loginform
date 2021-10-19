import { combineReducers } from "redux";
import employeReducers from './reducer';

const rootReducer=combineReducers({
    data:employeReducers
})

export default rootReducer;