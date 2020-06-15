import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";


let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 4},
                {id: 2, message: 'It is is my first post!', likesCount: 34},
                {id: 3, message: 'What is going on?', likesCount: 14}
            ],
            newPostText: 'it kamasutra'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; //обсервер это паттерн наблюдатель
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
        
    }
}

export default store;

// props.state.dialogsPage.dialogs.map(())
// пример движения через пропсы
