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
        <div>
            <form className='container-column' onSubmit={handleLogin}>
                <h1>Sign Up</h1>
                <br />
                <br />
                <br />
                <br />
                <input className='textbox-design' type="text" placeholder="Phone Number" />
                <br />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}

export default LoginPage;
