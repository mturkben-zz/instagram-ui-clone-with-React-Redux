import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import funReducer from './reducers/funReducer';

const rootReducers = combineReducers({
    fun: funReducer
});

export const store = createStore(rootReducers,applyMiddleware(thunk))