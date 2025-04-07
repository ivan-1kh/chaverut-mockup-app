import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ userLoggedIn, setUserLoggedIn }) {

    const navigate = useNavigate();

    const handleLogin = (event) => {

        event.preventDefault();

        setUserLoggedIn(true);
        navigate('/questionnaire');
    };

    return (
        <div className='container-column-centered'>
            <h1 style={{fontSize: "3rem"}}>Sign Up</h1>
            <br />
            <br />
            <br />
            <br />
            <form style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }} onSubmit={handleLogin}>
                <div class="input-container">
                    <img src="numpad.svg" alt="Numpad" class="numpad-icon" />
                    <input class="textbox-design" type="text" placeholder="Phone Number" />
                </div>
                <br />
                <br />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}

export default LoginPage;
