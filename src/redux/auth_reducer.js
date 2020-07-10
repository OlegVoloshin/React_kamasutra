import {authAPI} from '../api/api'
const SET_USER_DATA = 'SET_USER_DATA';
let initialState = {
    userID: null,
    email: null,
    //isFetching: false,
    login:null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
               ...action.data, isAuth: true }//data содержит userID,email,login
        default:
            return state;
    }
}

export const setAuthUserData = (userID, email, login) => {
    return { type: SET_USER_DATA, data: {userID, email, login} }
}
export const authThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(data => {                      
                if(data.resultCode === 0){
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));  
                }                
            });
    }
}

export default authReducer;