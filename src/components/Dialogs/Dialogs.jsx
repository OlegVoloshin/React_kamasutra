import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = 
    state.dialogs.map ((d) => <DialogItem img={d.img} name={d.name} id={d.id} />);
    
    let messageElements = state.messages.map ((m) => <Message message={m.message} id={m.id} />);
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;//target это и есть textarea, value в момент когда пользовательзователь 
        //вводит текст
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}                            
            </div>
            <div className={s.messages}>   
                <div>{messageElements}</div> 
                <div>
                    <div>
                        <textarea value={newMessageBody} 
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"></textarea>
                    </div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>         
            </div>
        </div>
    );
}

export default Dialogs;