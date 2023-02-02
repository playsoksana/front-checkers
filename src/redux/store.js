import {
    applyMiddleware,
    combineReducers,
    createStore,
} from "redux";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import allChecker from './allChecker/reducer';
import order from './order/reducer';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    allChecker,
    order,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);




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