import {combineReducers} from 'redux';
import CoordsReducerInit from './reducer-coords-init';
import SearchReducer from './reducer-search-text';


const allReducers = combineReducers({
    coords: CoordsReducerInit,
    serachedtextfromstate : SearchReducer
});



export default allReducers
