
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import PersonChat from '../../components/PersonChat';

const SwipableCircularDiv = ({ onSwipeLeft, onSwipeRight, children, style, swipeThreshold = 50, snapBackDuration = 0.3, circularFactor = 0.5 }) => {
    const swipableRef = useRef(null);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchCurrentX, setTouchCurrentX] = useState(0);
    const [touchCurrentY, setTouchCurrentY] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [transition, setTransition] = useState('');

    const handleTouchStart = (e) => {
        setTransition('');
        setTouchStartX(e.touches[0].clientX);
        setIsSwiping(true);
        setTouchCurrentY(0); // Reset vertical position on new touch
    };

    const handleTouchMove = (e) => {
        if (!isSwiping || touchStartX === null) return;
        const currentX = e.touches[0].clientX;
        const deltaX = currentX - touchStartX;
        setTouchCurrentX(deltaX);
        setTouchCurrentY(deltaX * circularFactor); // Vertical movement based on horizontal
    };

    const handleTouchEnd = () => {
        if (!isSwiping) return;
        setIsSwiping(false);

        if (Math.abs(touchCurrentX) > swipeThreshold) {
            if (touchCurrentX < 0 && onSwipeLeft) {
                onSwipeLeft();
            } else if (touchCurrentX > 0 && onSwipeRight) {
                onSwipeRight();
            }
        }

        setTransition(`transform ${snapBackDuration}s ease-out`);
        setTouchCurrentX(0);
        setTouchCurrentY(0);
        setTouchStartX(null);
    };

    // Mouse Event Handlers
    const [mouseStartX, setMouseStartX] = useState(null);
    const [mouseCurrentX, setMouseCurrentX] = useState(0);
    const [mouseCurrentY, setMouseCurrentY] = useState(0);
    const [isMouseSwiping, setIsMouseSwiping] = useState(false);

    const handleMouseDown = (e) => {
        setTransition('');
        setMouseStartX(e.clientX);
        setIsMouseSwiping(true);
        setMouseCurrentY(0);
        if (swipableRef.current) {
            swipableRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseMove = (e) => {
        if (!isMouseSwiping || mouseStartX === null) return;
        const currentX = e.clientX;
        const deltaX = currentX - mouseStartX;
        setMouseCurrentX(deltaX);
        setMouseCurrentY(deltaX * circularFactor);
    };

    const handleMouseUp = () => {
        if (!isMouseSwiping) return;
        setIsMouseSwiping(false);

        if (Math.abs(mouseCurrentX) > swipeThreshold) {
            if (mouseCurrentX < 0 && onSwipeLeft) {
                onSwipeLeft();
            } else if (mouseCurrentX > 0 && onSwipeRight) {
                onSwipeRight();
            }
        }

        setTransition(`transform ${snapBackDuration}s ease-out`);
        setMouseCurrentX(0);
        setMouseCurrentY(0);
        setMouseStartX(null);
        if (swipableRef.current) {
            swipableRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseLeave = () => {
        if (isMouseSwiping) {
            handleMouseUp();
        }
    };

    const swipableStyle = {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // position: "absolute",
        cursor: 'grab',
        height: "100%",
        transform: `translate(${touchCurrentX + mouseCurrentX}px, ${Math.abs(touchCurrentY + mouseCurrentY)}px)`,
        transition: transition,
        userSelect: 'none',
        ...style,
    };

    return (
        <div
            ref={swipableRef}
            style={swipableStyle}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            draggable="false"
        >
            {children}
        </div>
    );
};



function FeedPage() {

    const [matched, setMatched] = React.useState(1);

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/idk');
    };

    const handleSwipeLeft = () => {
        console.log('Swiped Left in Example!');
        setMatched(matched + 1);
    };

    const handleSwipeRight = () => {
        console.log('Swiped Right in Example!');
        setMatched(matched + 1);
    };

    return (
        <SwipableCircularDiv onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
            <div className='container-column'>
                {matched > 3 ?
                    <><p className='large-text'>You've got a match!</p>
                        <PersonChat name="Yechiel Ben Ari" pfp="./pfp1.jpeg" /></> :

                    <>

                        <div className='matchingContainer'>
                            <img className="bigPfp" src={"pfp" + matched + ".jpeg"} />
                            <div className='profileInfoContainer' style={{ "margin-top": "0" }}>

                                <div className='bullet container-row' style={{ "justify-content": "center" }}>
                                    <h1>
                                        {matched == 1 && "Yechiel Ben Ari, 19"}
                                        {matched == 2 && "Ben Shapiro, 67"}
                                        {matched == 3 && "Ben Badman, 14"}
                                    </h1>
                                </div>

                                <div className='bullet container-row' style={{ "justify-content": "center" }}>
                                    <img className='icon-svg' src="./location.svg" />
                                    <h1>
                                        {matched == 1 && "NYC"}
                                        {matched == 2 && "Tacoma"}
                                        {matched == 3 && "Afghanistan"}
                                    </h1>
                                </div>

                                <div className='acceptRejectButtons'>
                                    <img className="arrow-left" src="left.svg" width="70rem" onclick={() => { }} />
                                    <img className="arrow-right" src="right.svg" width="70rem" onClick={() => setMatched(true)} />
                                </div>

                                <div className='container-column'>
                                    <div className='bullet container-row'>
                                        <img className='icon-svg' src="./learning.svg" />
                                        <h1>
                                            {matched == 1 && "Jewish History, Torah Studies, and Jewish Philosophy"}
                                            {matched == 2 && "Talmud and Halacha, Shabbat Laws. and Jewish History"}
                                            {matched == 3 && "Jewish Philosophy, Kabbalah and Mysticism, and Jewish Ethics and Mussar"}
                                        </h1>
                                    </div>
                                    <div className='bullet container-row'>
                                        <img className='icon-svg' src="./sparkle.svg" />
                                        <h1>
                                            {matched == 1 && "Gradual and Reflective"}
                                            {matched == 2 && "Gradual and Reflective"}
                                            {matched == 3 && "Gradual and Reflective"}
                                        </h1>
                                    </div>
                                    <div className='bullet container-row'>
                                        <img className='icon-svg' src="./calendar.svg" />
                                        <h1>
                                            {matched == 1 && "In person, Afternoon, 1 session per week"}
                                            {matched == 2 && "Afternoon. 2 sessions a week"}
                                            {matched == 3 && "Morning. 3 sessions a week"}
                                        </h1>
                                    </div>
                                    <div className='bullet container-row'>
                                        <img className='icon-svg' src="./goals.svg" />
                                        <h1>
                                            {matched == 1 && "Deepen Knowledge of Jewish Text and Explore Jewish Issues"}
                                            {matched == 2 && "Deepen Knowledge of Jewish Texts, Enhance my understanding of Jewish texts."}
                                            {matched == 3 && "Deepen Knowledge of Jewish Texts, Learn Jewish Ethics and Values"}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>}
            </div>
        </SwipableCircularDiv>
    );
}

export default FeedPage;
