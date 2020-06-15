const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 4 },
        { id: 2, message: 'It is is my first post!', likesCount: 34 },
        { id: 3, message: 'What is going on?', likesCount: 14 }
    ]
};
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            let copyState = { ...state };//делаем копию
            copyState.posts = [ ...state.posts ];//делаем копию state.profilePage.posts
            copyState.posts.push(newPost);
            copyState.newPostText = '';  // занулили зачистили текстарею
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = { ...state };
            copyState.newPostText = action.newText;
            return copyState;
        }
        default:
            return state;
    }


}

export const addPostActionCreator = () => ({ type: ADD_POST }) //можно return опустить

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text };
}

export default profileReducer;