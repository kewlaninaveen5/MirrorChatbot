import React, {useState, useEffect} from "react";
import BotChat from "../UI/BotChat/BotChat";
import UserChat from "../UI/UserChat/UserChat";
import './ChatsArea.css';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/Actions';


const ChatsArea = (props) => {

    
    return (
        <div>
            {props.ReduxChat.map((item, index)=>{
                return(
                    <div key={index} >
                        <UserChat 
                        chat={item}
                        />

                    </div>
                )
            })}


        </div>
    );
};

const mapStateToProps = (state) => ({
    ReduxChat: state.UserChat

})

const mapDispatchToProps = dispatch => {
    return {
        onAddChat: (Chat) => dispatch(
            {
                type: actionTypes.ADD_CHAT,
                FullChatList: Chat
            }),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatsArea);