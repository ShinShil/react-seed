import React from 'react';

function Auth() {
    return (
        <div className="text-center w-25 mt-5 mx-auto">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                       autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                <p className="mt-5 mb-3 text-muted">&copy; Hotel 2019</p>
            </form>
        </div>
    );
}

export default Auth;
