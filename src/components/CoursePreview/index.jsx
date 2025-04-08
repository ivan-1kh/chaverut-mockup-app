import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function CoursePreview({ title, photo }) {

    
    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/course');
    };

    return (
        <div style={{

            
            border: "2px black solid",
            borderRadius: "1rem",
            width: "60%",
            height: "12vh",
            marginBottom: "1rem",
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover', // Or 'contain'
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          

            
        }} onClick={handleSomething}>
            {/* <img src={photo} /> */}
            <h3 style={{

                // position: "relative",
                // bottom: "0",
                textAlign: "center",
                fontSize: "1rem",
                color: "white",
                backgroundColor: "black"

            }}>{title}</h3>
        </div>
    );
}

export default CoursePreview;
