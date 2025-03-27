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
            <form className='container-column-centered' onSubmit={handleLogin}>
                <input className='textbox-design' type="text" placeholder="Username" />
                <br />
                <input className='textbox-design' type="password" placeholder="Password" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;
