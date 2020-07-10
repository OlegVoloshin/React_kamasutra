import { usersAPI } from '../api/api'
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'// включить фетчинг крутилка
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []// чтобы не были задизэблины все кнопки. Урок 64
    //если мы подписываемся на кого-то то userID добавляем в массив, если отписка убираем с массива
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(u => {//проходим по массиву имеющегося state
                    if (u.id === action.userID) {//если совпал id
                        return { ...u, followed: true }//возвращаем копию и меняем на true
                    }

                    return u;
                })
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(u => {//проходим по массиву имеющегося state
                    if (u.id === action.userID) {//если совпал id
                        return { ...u, followed: false }//возвращаем копию и меняем на false
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }// берем копию старых пользователей ...state.users и дописываем туда новых userov из action, тк user не один, а массив, то делаем спред-оператор ...action.users. тоесть склеиваем 2 массива из state и action
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.total }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.boolean }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }// оставляем в новом массиве все userId кроме того что совпал в action
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({ type: FOLLOW_SUCCESS, userID })
//можно return опустить

export const unfollowSuccess = (userID) => {
    return { type: UNFOLLOW_SUCCESS, userID };
}
export const setUsers = (users) => ({ type: SET_USERS, users })//возвращает action(action creators)
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (total) => ({ type: SET_TOTAL_USERS_COUNT, total })
export const setIsFetching = (boolean) => ({ type: TOGGLE_IS_FETCHING, boolean })
export const toggleIsFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })

export const getUsers = (currentPage, pageSize) => {//thunkcreator

    return (dispatch) => {// thunk

        dispatch(setIsFetching(true))//включаем крутилку   
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))// выключаем
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const follow = (userId) => {//thunkcreator

    return (dispatch) => {// thunk
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId) => {//thunkcreator

    return (dispatch) => {// thunk
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            });
    }
}
export default usersReducer;