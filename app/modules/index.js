import { combineReducers } from "redux";

// REDUCER
import voting from "./voting/voting.reducer.js";

// ACTION TYPE
import * as votingAction from "./voting/voting.action.js";


const reducers = combineReducers({
    voting
});

export const action = {
    voting: votingAction
};

export default reducers;