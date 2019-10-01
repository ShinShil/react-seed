import React, {useEffect} from 'react';
import './Rooms.module.scss';
import BookRoom from "./room/Room";
import * as bookClasses from './room/Room.module.scss';
import * as classes from './Rooms.module.scss';
import {connect} from 'react-redux';
import {fetchRooms} from "../../../lib/redux/actions/roomsActions";

function Rooms({fetchRooms, rooms, loading}) {
    useEffect(() => {
        fetchRooms()
    }, [fetchRooms]);
    console.log('Hello');
    console.log(rooms);

    return (
        <div>
            <style>
                {`.${classes.rooms} .${bookClasses.room}`} {'{'}
                width: 33%;
                float: left;
                {'}'}
            </style>
            <h4 className="text-center mb-3 mt-3">Book a room</h4>
            {
                !loading && rooms
                    ? <div className={classes.rooms}>
                        {rooms.map((room, index) => (
                            <BookRoom
                                key={index}
                                index={index}/>
                        ))}
                    </div>
                    : <div>Loading</div>
            }
        </div>
    );
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms.rooms,
        loading: state.rooms.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchRooms: () => dispatch(fetchRooms()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);