import React, {useState, useEffect} from "react";
import './UserChat.css';
import { FiUser } from 'react-icons/fi';


const UserChatContainer = (props) => {
    return (
            <div className='userchat-container' >
        <div className='userchat' >
            {props.chat}
        </div>
                {/* <FiUser className='user-image'/> */}
        </div>
    );
};

export default UserChatContainer;