const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 4 },
        { id: 2, message: 'It is is my first post!', likesCount: 34 },
        { id: 3, message: 'What is going on?', likesCount: 14 }
    ],
    newPostText: 'it kamasutra',
    profile: null
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST }) //можно return опустить

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text };
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;