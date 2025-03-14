import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ userLoggedIn, setUserLoggedIn }) {

    const navigate = useNavigate();

    const handleLogin = (event) => {

        event.preventDefault();
        
        setUserLoggedIn(true);
        navigate('/feed');
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;
