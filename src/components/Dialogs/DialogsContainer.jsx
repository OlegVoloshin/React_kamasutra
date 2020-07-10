import React from 'react';
import { sendMessageCreator, updateNewMessageCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
       }
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;