/**
 * Created by Dell on 26.02.2020.
 */
import {createStore ,combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {carsReducer} from "./reducers/car-reducer";


const reducers = combineReducers({
    items: carsReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
