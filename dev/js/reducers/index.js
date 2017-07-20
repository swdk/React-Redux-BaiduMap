import {combineReducers} from 'redux';
//import UserReducer from './reducer-users';
import CoordsReducerInit from './reduce-coords-init';
import CoordsReducer from './reducer-coords';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    coords: CoordsReducerInit
});

export default allReducers
