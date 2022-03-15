import React from 'react';
import './Buttons.css';
import { GrClose } from "react-icons/gr";
import { IoMdChatboxes, IoMdClose  } from "react-icons/io";

const SocialMediaButton = (props) => {


    let icon;
    switch (props.icon) {
        case "open":
            icon = <IoMdChatboxes className='icon-icon'/>
                break;
        case "close":
            icon = <IoMdClose className='icon-icon'/>
                break;
        default:
            return null
        }



    return (
        
            <div onClick={props.clicked}
            className='socialmedia-button' >
                {icon}
            </div>
    )
}

export default SocialMediaButton;