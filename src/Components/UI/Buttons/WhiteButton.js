import React from 'react';
import './Buttons.css';

const WhiteButton = (props) => {
    return (
        
            <div 
            disable={props.disable}
            onClick={props.clicked}
            className={`white-button${!props.disable ? '' : '-disable'}`} >
                {props.btnName}
            </div>
    )
}

export default WhiteButton;