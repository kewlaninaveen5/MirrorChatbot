import React from 'react';
import './Buttons.css';

const BlueButton = (props) => {
    return (
        
            <div 
            onClick={props.clicked}
            className={`blue-button${!props.disable ? '' : '-disable'}`} disable={props.disable}>
                {props.btnName}
            </div>
    )
}

export default BlueButton;