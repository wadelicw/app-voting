import thunk from "redux-thunk";
import reducers from "./modules/index.js";
import {createStore, applyMiddleware} from "redux";


function makeStore(initState){
    return createStore(reducers, initState, applyMiddleware(thunk));
}

export default makeStore;