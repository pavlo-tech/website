import React from 'react';
import './Banner.css';

const Banner = (props) =>
{
    return (
        <div className="Banner" onClick={props.click}>
            <h1>pavlo-tech</h1>
        </div>
    );
}

export default Banner;