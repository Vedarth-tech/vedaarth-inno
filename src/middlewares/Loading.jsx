import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/loading.css'; // Import your loading styles here

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // Cleanup in case the component unmounts
    }, [navigate]);

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-white'>
            <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
            </svg>
        </div>
    );
};

export default Loading;













/* import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'  // Import useNavigate hook
import TextFader from '../components/TextFader'

const LoadingPage = () => {
    const navigate = useNavigate();  // Initialize the navigate function
    const [animationComplete, setAnimationComplete] = useState(false);  // State to track animation completion

    useEffect(() => {
        // Redirect to '/home' after animation completes (or after timeout)
        if (animationComplete) {
            navigate('/home');
        }
    }, [animationComplete, navigate]);  // Triggered when animation is complete

    // Simulate a callback for when the text fades completely
    const handleAnimationComplete = () => {
        setAnimationComplete(true);  // Set animation as complete
    };

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-white'>
            <div className="flex flex-col items-center justify-center">
                <TextFader onComplete={handleAnimationComplete} />
            </div>
        </div>
    );
}

export default LoadingPage;
 */