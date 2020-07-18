import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'
import { Field, reduxForm } from 'redux-form';



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements =
        state.dialogs.map((d) => <DialogItem img={d.img} name={d.name} id={d.id} />);

    let messageElements = state.messages.map((m) => <Message message={m.message} id={m.id} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
}

const AddMessageForm = (props) => {
    return (//props.handleSubmit from 'redux-form должно выполниться когда форма засабмитется
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;