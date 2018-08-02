import React from 'react';

const CharComponent = (props) => {
    const validStyles = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }

    const warningStyles = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid red'
    }

    return (
        <div style={ (props.length < 5) ? warningStyles : validStyles } 
            onClick={props.click} > 
            {props.letter}
        </div>
    );
}

export default CharComponent;