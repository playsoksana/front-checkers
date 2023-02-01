import {
    applyMiddleware,
    combineReducers,
    createStore,
} from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import allChecker from './reducer';

const configureStore = () => {
    const rootReducer = combineReducers({
        allChecker,
    });

    const middlewareEnhancer = applyMiddleware(thunkMiddleware);
    const composedEnhancers = composeWithDevTools(middlewareEnhancer)

    const initialState = {};
    return createStore(rootReducer, initialState, composedEnhancers);
};




export default configureStore;