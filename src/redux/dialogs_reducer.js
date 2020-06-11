const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Olegan', img: 'https://image.freepik.com/free-vector/_8169-228.jpg'},
        {id: 2, name: 'Petro', img: 'https://image.freepik.com/free-vector/gamer-youtuber-gaming-avatar-with-headphones-esport-logo_8169-260.jpg'},
        {id: 3, name: 'Sarmen', img: 'https://image.freepik.com/free-vector/pro-gamer-avatar-logo_71220-49.jpg'},
        {id: 4, name: 'Gogi', img: 'https://image.freepik.com/free-vector/_139366-185.jpg'},
        {id: 5, name: 'Dohod', img: 'https://image.freepik.com/free-vector/_10308-81.jpg'}
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Yo!'},
        {id: 3, message: 'Sorry'},
        {id: 4, message: 'Bye'},
        {id: 5, message: 'what?'}
    ],
    newMessageBody: ''
};
const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;  
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE};//экспортируем условия обьекта {}
}
export const updateNewMessageCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body};
}

export default dialogsReducer;