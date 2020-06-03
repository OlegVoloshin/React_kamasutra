import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'



const Dialogs = (props) => {
    debugger;
    let dialogElements = 
    props.state.dialogsPage.dialogs.map ((d) => <DialogItem img={d.img} name={d.name} id={d.id} />);
    
    let messageElements = props.state.messages.map ((m) => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}                            
            </div>
            <div className={s.messages}>                
                {messageElements}               
            </div>
        </div>
    );
}

export default Dialogs;