const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {//проходим по массиву имеющегося state
                    if (u.id === action.userID) {//если совпал id
                        return { ...u, followed: true }//возвращаем копию и меняем на true
                    }

                    return u;
                })
            }
        case UNFOLLOW:
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
                return {...state, users: action.users}
            case SET_CURRENT_PAGE: 
                return {...state, currentPage: action.currentPage}// берем копию старых пользователей ...state.users и дописываем туда новых userov из action, тк user не один, а массив, то делаем спред-оператор ...action.users. тоесть склеиваем 2 массива из state и action
            case SET_TOTAL_USERS_COUNT: 
                return {...state, totalUsersCount: action.total}
        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID }) 
//можно return опустить

export const unfollowAC = (userID) => {
    return { type: UNFOLLOW, userID };
}
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (total) => ({type: SET_TOTAL_USERS_COUNT, total})

export default usersReducer;