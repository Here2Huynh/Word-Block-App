import React from 'react';

const ValidationComponent = (props) => {
    const warningStyle = { 
        color: 'red'
    };

    const validStyle = {
        color: 'black'
    };

    return (
        <div>
        {/* <p> Text Length : {props.textLength} </p> */}
        { (props.textLength < 5) 
            ? <p style={warningStyle}> Text too short </p>
            : <p style={validStyle}> Text long enough</p>
        }
        </div>
    );
}

export default ValidationComponent;