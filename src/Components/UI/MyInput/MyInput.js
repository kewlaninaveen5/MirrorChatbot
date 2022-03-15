import React from 'react';
import './MyInput.css';
import { MdOutlineArrowRight } from 'react-icons/md';


const MyInput = (props) => {
    return (
        <div className="myinput-container" >
            <MdOutlineArrowRight className='arrow'/>
            <input 
            ref={props.refr}
            onChange={props.changed}
            value={props.value}
            type={props.type}
            name={props.name}
            onKeyPress={props.keypressed}
            className={`myinput${props.description ? '-description' : ''}` } 
            placeholder={props.placeholder} />
        </div>
    )
}

export default MyInput;