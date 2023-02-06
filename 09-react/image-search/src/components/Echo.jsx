import React, { useState } from 'react';

const Echo = function () {
    const [message, setMessage] = useState(''); // useState returns the current state and a function to let you change it

    return (
        <div>
            <h1>{ message }</h1>
            <input placeholder="type stuff here" onChange={ (e) => setMessage(e.target.value) } />
        </div>
    );
};

export default Echo;