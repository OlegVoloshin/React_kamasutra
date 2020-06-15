const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 4 },
        { id: 2, message: 'It is is my first post!', likesCount: 34 },
        { id: 3, message: 'What is going on?', likesCount: 14 }
    ],
    newPostText: 'it kamasutra'
};
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],// запушили newPost
                newPostText: '' // занулили зачистили текстарею
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            {
                return { ...state,
                newPostText: action.newText }
            }
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