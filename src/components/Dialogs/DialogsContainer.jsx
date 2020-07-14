import React from 'react';
import { sendMessageCreator, updateNewMessageCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';


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

export default compose(//оборачивает снизу вверх
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)//Dialogs это наш целевой обьект