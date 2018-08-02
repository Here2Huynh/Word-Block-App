import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div>
        {/* <p> Text Length : {props.textLength} </p> */}
        { (props.textLength < 5) 
            ? <p> Text too short </p>
            : <p> Text long enough</p>
        }
        </div>
    );
}

export default ValidationComponent;