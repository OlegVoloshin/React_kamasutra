import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC} from '../../redux/users_reducer'

let mapStateToProps = (state) => {//передаем state
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;