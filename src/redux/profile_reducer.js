import {usersAPI, profileAPI} from '../api/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 4 },
        { id: 2, message: 'It is is my first post!', likesCount: 34 },
        { id: 3, message: 'What is going on?', likesCount: 14 }
    ],
    newPostText: 'it kamasutra',
    profile: null,
    status: ""
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
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST }) //можно return опустить
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const updateNewPostTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
            .then(data => {
                    dispatch(setUserProfile(data))//ответ пришел в data, сэтаем его в редьюсер                
            });
}
export const getStatus = (userId) => (dispatch) => {
    
    profileAPI.getStatus(userId)
            .then(data => {
                    dispatch(setStatus(data))//ответ пришел в data, сэтаем его в редьюсер                
            });

}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setStatus(status))}//ответ пришел в data, сэтаем его в редьюсер                
            });

}

export default profileReducer;