import {combineReducers} from 'redux';
import {roomsReducerBuilder} from './roomsReducer';
import {authReducerBuilder} from './authReducer';

const reducer = (builder) =>
    (state = builder.initialState, action) =>
        (builder.reducerMap[action.type] || builder.defaultHandler || (() => state))(state, action);

export default combineReducers({
    rooms: reducer(roomsReducerBuilder),
    auth: reducer(authReducerBuilder)
});