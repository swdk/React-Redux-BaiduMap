import {combineReducers} from 'redux';
import CoordsReducerInit from './reducer-coords-init';


//combing all other reducer
const allReducers = combineReducers({
    coords: CoordsReducerInit,
});



export default allReducers
