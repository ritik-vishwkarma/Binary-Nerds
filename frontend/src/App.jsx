import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loader from "./components/Loader";
import "./App.css";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);

    const initializeShapes = () => {
        const shapes = document.querySelectorAll(".circle, .square, .triangle, .rectangle, .ellipse, .hexagon, .star");

        shapes.forEach((shape) => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            shape.style.transform = `translate(${randomX}px, ${randomY}px)`;

            const randomDuration = Math.random() * 20 + 10;
            shape.style.animationDuration = `${randomDuration}s`;

            const randomDelay = Math.random() * 5;
            shape.style.animationDelay = `${randomDelay}s`;
        });
    };

    useEffect(() => {
        initializeShapes();
    }, []);

    const handleSearch = async () => {
        setLoading(true); // Show loader
        try {
            console.log('Request payload:', { inputValue }); // Log the request payload
            const response = await axios.post('http://localhost:4000/run-flow', {
                input_value: inputValue
            }, {
                timeout: 50000 // Set timeout to 50 seconds
            });
            console.log("Response data:", response.data); // Log the response data
            setResponseData(response.data);
        } catch (error) {
            console.error('Error fetching analysis:', error);
        } finally {
            setLoading(false); // Hide loader
        }
    };

    return (
        <div className="app">
            {loading ? (
                <Loader /> // Show loader when loading
            ) : (
                <>
                    {!responseData && (
                        <div className="shapes">
                            <div className="circle"></div>
                            <div className="square"></div>
                            <div className="triangle"></div>
                            <div className="rectangle"></div>
                            <div className="ellipse"></div>
                            <div className="hexagon"></div>
                            <div className="star"></div>
                        </div>
                    )}
                    <div className="content">
                        <h1 className="title">Social Media Engagement Analysis</h1>
                        <p>Enter a query to analyze the data provided.</p>
                        <div className="search-bar">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Enter a Query" />
                            <button onClick={handleSearch}>Search</button>
                        </div>
                        {responseData && (
                            <div className="response">
                                <h3>Response:</h3>
                                <div className="response-content">
                                    {responseData.response.split('\n').map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;