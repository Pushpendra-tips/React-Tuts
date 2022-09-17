import React from 'react';

const Home = (props) => {
    console.log(props)
    return (
        <div style={{margin:"12px"}}>
            <h2 style={props.style}>{props.name}</h2>
            <p style={props.style}> {props.address}</p>
        </div>
    );
};

export default Home;