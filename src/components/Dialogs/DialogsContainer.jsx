import React from 'react';
import { sendMessageCreator, updateNewMessageCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext';

//Важно, чтобы после <StoreContext.Consumer> тега остальной код начинался с новой строки!

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageCreator(body));
            }
            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state} />
        }
    }
    </StoreContext.Consumer>

}

export default DialogsContainer;