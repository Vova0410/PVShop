/**
 * Created by Dell on 26.02.2020.
 */
import {createStore ,combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {mercedesReducer} from "./reducers/mersedes-reducer";
import thunk from 'redux-thunk';


const reducers = combineReducers({
    mercedes: mercedesReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
