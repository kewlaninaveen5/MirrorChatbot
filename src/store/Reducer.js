import { connect } from 'react-redux';
import UserChat from '../Components/UI/UserChat/UserChat';
import * as actionTypes from './Actions';

const InitialState = {
    UserChat: []
}

const Reducer = (state = InitialState, action) => {

    if (action.type == actionTypes.ADD_CHAT) {
        return {
            ...state,
            UserChat: action.FullChatList
        }
    }


    return state;

}



export default Reducer;