const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

// let initialState = {
//     users: [
//         { id: 1, folloewd: false, fullName: 'Olegan', status: 'I am a boss!', location: { city: 'Kyiv', country: 'Ukraine' } },
//         { id: 2, folloewd: true, fullName: 'Dohod', status: 'You whant some?', location: { city: 'Lugansk', country: 'Ukraine' } },
//         { id: 3, folloewd: false, fullName: 'Stasik', status: 'Here you are!', location: { city: 'New York', country: 'USA' } }
//     ]
// };
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {//проходим по массиву имеющегося state
                    if (u.id === action.userID) {//если совпал id
                        return { ...u, folloewd: true }//возвращаем копию и меняем на true
                    }

                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {//проходим по массиву имеющегося state
                    if (u.id === action.userID) {//если совпал id
                        return { ...u, folloewd: false }//возвращаем копию и меняем на false
                    }
                    return u;
                })
            }
            case SET_USERS: 
                return {...state, users: [...state.users, ...action.users]}// берем копию старых пользователей ...state.users и дописываем туда новых userov из action, тк user не один, а массив, то делаем спред-оператор ...action.users. тоесть склеиваем 2 массива из state и action

        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID }) //можно return опустить

export const unfollowAC = (userID) => {
    return { type: UNFOLLOW, userID };
}
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;