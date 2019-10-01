import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Hotel book service</h1>
                    <p className="lead font-weight-normal">Book a room online - save your time and get
                        discount for 5%</p>
                    <p className="small-text">Save up to 10% if create an account</p>
                    <div>
                        <NavLink className="btn btn-outline-primary mr-2" to="/book">Book a room</NavLink>
                        <NavLink className="btn btn-outline-secondary" to="/auth">Sing In/Up</NavLink>
                    </div>
                </div>
                <div className="product-device box-shadow d-none d-md-block"></div>
                <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
        </div>
    )
}

export default Home;