import React, {useState, useEffect, useRef} from "react";
import BlueButton from "../../UI/Buttons/BlueButton";
import SocialMediaButton from "../../UI/Buttons/SocialMediaButtons";
import { GrRobot } from 'react-icons/gr';
import './ChatbotWindow.css';
import MyInput from "../../UI/MyInput/MyInput";
// import ChatsArea from "../../ChatsArea/ChatsArea";
import * as actionTypes from '../../../store/Actions';
import {connect} from 'react-redux';
import BotChat from "../../UI/BotChat/BotChat";
import UserChatContainer from '../../UI/UserChat/UserChat';
import BackgroundPhoto from '../../../Assets/Images/ChatbotPage/header-chat-box.png';
import Backdrop from "../../UI/Backdrop/Backdrop";

const ChatbotWindow = (props) => {

    const inputRef= useRef()

    const [isOpen, setIsopen] = useState(false);
    const [UserInput, setUserInput] = useState('');
    const [UserChat, setUserChat] = useState([]);

    useEffect(()=>{
        const chats = JSON.parse(localStorage.getItem('UserChat'));
         setUserChat(chats ? chats : []);
         props.onAddChat(chats);
    },[])

    useEffect(()=>{

        const scroller = document.getElementsByClassName('chatbot-chatbox');
        // console.log(scroller[0].scrollHeight)
        // scroller[0].scrollTo({
        //     top: scroller[0].scrollHeight,
        //     behaviour: "smooth"
        // })
        if (scroller[0])
        {
            scroller[0].scrollTop = scroller[0].scrollHeight
        }


    });

    
    let display;

    const openChatbot = () => {
        setIsopen(true);
        // inputRef.current.focus()

    }

    const UpdateUserInput = (e) => {
        setUserInput(e.target.value)

    }

    const enterPressed = (e) => {
        const code = e.keyCode || e.which
        if (code === 13)
        SendUserInput()

    }

    const ClearHandler = () => {
        localStorage.setItem('UserChat', JSON.stringify([]))
        setUserChat([])
    }

    const SendUserInput = async () => {
        if (UserInput === '')
        return
        const oldChats = UserChat;
        console.log(typeof(oldChats), "  ", oldChats);
        oldChats.push(UserInput);
        props.onAddChat(oldChats)
        console.log(oldChats);
        localStorage.setItem('UserChat', JSON.stringify(oldChats))
        setUserChat(oldChats);
        console.log("sent", UserChat);
        // sendResponseToUser();

        setUserInput('');
        inputRef.current.focus()
        
    }




    if (!isOpen)
    display = (<div>

            <BlueButton btnName='Open ChatBot' clicked={()=>openChatbot()} />
            <div>Click here to open the ChatBot</div>
            <SocialMediaButton icon='open' clicked={()=>openChatbot()}/>
        </div>)
    else 
    display= (<div>
        <div className='chatbot-container'>
        <div className='chatbot-header' >
            <GrRobot className='bot' />
            Mirror Bot


        </div>
        <div className='chatbot-chatbox'>
            
            <BotChat 
            chat='Hi! I am Mirror Bot. Try writing Something and I will mirror it. Just like Talking Tom'
            />
            {
                UserChat.map((it, id) => {
                    return <div key={id}>
                        <UserChatContainer 
                        chat={it}
                        />
                        <BotChat 
                        chat={it}
                        />
                    </div>
                })
            }
            
        </div>
        <div  className='chatbot-inputs' >
            <MyInput 
            refr = {inputRef}
            keypressed={(event) => enterPressed(event)}
            placeholder="Write Something"
            value={UserInput}
            changed={(event)=>UpdateUserInput(event)}
            />
            <div className='chatbot-send-button'>
            <BlueButton 
            clicked={()=>SendUserInput()}
            btnName='send'/>
            </div>
        </div>
    </div>
        {/* <BlueButton btnName='Close ChatBot' clicked={()=>setIsopen(false)} /> */}
            <div className='clear-chat-button' >
                <BlueButton btnName='Clear All Chat' clicked={()=>ClearHandler()} />
            </div>
        <SocialMediaButton icon='close' clicked={()=>setIsopen(false)} />

    </div>)



    return (
        <div className='chatbot-window-container'>
            <img src={BackgroundPhoto} className='bgc-img'/>
            <Backdrop 
            clicked={()=>setIsopen(false)} 
            show={isOpen} />

            {display}

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

export default connect(mapStateToProps, mapDispatchToProps)(ChatbotWindow);