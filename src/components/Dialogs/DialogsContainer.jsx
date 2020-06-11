import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {    
    
    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageCreator(body));
    }
    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}  dialogsPage={state} />
        
}

export default DialogsContainer;