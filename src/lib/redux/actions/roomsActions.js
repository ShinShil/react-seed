import {
    FETCH_ROOMS_ERROR,
    FETCH_ROOMS_START,
    FETCH_ROOMS_END
} from './actionTypes';
import {ROOM_STATE_IDS} from "../../constants";
import {apiFetchRooms} from "../../axios/server";

export function fetchRooms() {
    return async dispatch => {
        try {
            dispatch({type: FETCH_ROOMS_START});
            const { data } = await apiFetchRooms();
            dispatch({type: FETCH_ROOMS_END, data});
        } catch (e) {
            dispatch({type: FETCH_ROOMS_ERROR, e});
        }
    }
}

export function startFetch() {
    return {
        loading: true
    }
}

export function finishFetch(state, { rooms }) {
    console.log(state, rooms);
    return {
        loading: false,
        rooms
    };
}

export function bookRoom(state, { index }) {
    const room = state.rooms[index];
    if(room.state === ROOM_STATE_IDS.SELECTED) {
        room.state = ROOM_STATE_IDS.NOT_SELECTED
    } else if(room.state === ROOM_STATE_IDS.NOT_SELECTED) {
        room.state = ROOM_STATE_IDS.SELECTED
    } else {
        room.state = ROOM_STATE_IDS.SELECTED
    }
    state.rooms[index] = {...room};
    return { ...state }
}

export function errorFetch(state, { e }) {
    console.log(e);
    return {
        ...state,
        loading: false
    }
}