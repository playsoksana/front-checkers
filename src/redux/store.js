import {
    applyMiddleware,
    combineReducers,
    createStore,
} from "redux";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'allChecker',
    storage,
};
const rootReducer = combineReducers({
    allChecker,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import allChecker from './reducer';


const configureStore = () => {
    const middlewareEnhancer = applyMiddleware(thunkMiddleware);
    const composedEnhancers = composeWithDevTools(middlewareEnhancer)

    const initialState = {};
    let store = createStore(persistedReducer, initialState, composedEnhancers);

    return store
};

let store = configureStore();
let persistor = persistStore(store);


export { store, persistor };