import React, {useState, useEffect} from "react";
import './BotChat.css';
import { GrRobot } from 'react-icons/gr';


const BotChat = (props) => {
    return (
        <div className='botchat-container' >
            <div className='bot-image' >
                <GrRobot/> 
            </div>
        <div className='botchat' >
            {props.chat}
        </div>
        </div>
    );
};

export default BotChat;