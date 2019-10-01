import {
    FETCH_ROOMS_END,
    FETCH_ROOMS_START,
    FETCH_ROOMS_ERROR,
    BOOK_ROOM
} from '../actions/actionTypes';
import {
    startFetch,
    finishFetch,
    errorFetch,
    bookRoom
} from '../actions/roomsActions';

export const roomsReducerBuilder = {
    initialState: {
        rooms: [],
        loading: true
    },
    reducerMap: {
        [FETCH_ROOMS_START]: startFetch,
        [FETCH_ROOMS_END]: finishFetch,
        [FETCH_ROOMS_ERROR]: errorFetch,
        [BOOK_ROOM]: bookRoom
    }
};

