import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import '../styles/Login.css';
import { actionTypes } from '../services/reducer';
import { useStateValue } from '../components/StateProvider';

function Login() {
    const [user, setUser] = useState("Thomas Shelby");
    const [password, setPassword] = useState("peakyblinders");
    const [{ }, dispatch] = useStateValue();
    const signIn = () => {
        dispatch({
            type: actionTypes.SET_USER,
            user: user
        });
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <div className="login__form">
                <input
                    placeholder="Name"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
