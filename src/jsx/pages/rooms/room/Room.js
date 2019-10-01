import React from 'react';
import * as classes from './Room.module.scss';
import './Room.module.scss';
import {connect} from 'react-redux';
import {ROOM_STATE_IDS} from "../../../../lib/constants";
import {BOOK_ROOM} from "../../../../lib/redux/actions/actionTypes";

const bookClassesMap = {
    [ROOM_STATE_IDS.SELECTED]: classes.selected,
    [ROOM_STATE_IDS.NOT_SELECTED]: '',
    [ROOM_STATE_IDS.BUSY]: classes.busy
};

function Room({room, bookRoom}) {
    const bookTitle = room.state === ROOM_STATE_IDS.BUSY ? `Booked by ${room.reservedBy}` : '';
    const bookClass = bookClassesMap[room.state] || '';
    return (
        <div
             title={bookTitle}
             className={`${classes.room} ${bookClass}`}
             onClick={bookRoom}>
            <p>{room.roomNumber}</p>
        </div>
    );
}

function mapStateToProps(state, props) {
    console.log(state);
    return {
        room: state.rooms.rooms[props.index]
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        bookRoom: () => dispatch({type: BOOK_ROOM, index: props.index})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);