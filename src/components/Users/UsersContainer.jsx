import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toggleIsFollowingProgress } from '../../redux/users_reducer'
import Users from './Users'
import Preloader from '../common/preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {//классовая компонента

    // constructor(props){ происходит по умолчанию, можно не писать
    //     super(props);        
    // }

    componentDidMount() {
        this.props.setIsFetching(true)        
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
            usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
            }
            );
    }
    render() {

        return <>
        {this.props.isFetching ? <Preloader /> : null}
            <Users
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize}                
            currentPage={this.props.currentPage} 
            users={this.props.users} unfollow={this.props.unfollow}
            follow={this.props.follow} onPageChanged={this.onPageChanged}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {//передаем state
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {   //коллбэки,  которые диспатчат в state
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }
export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toggleIsFollowingProgress})(UsersContainer);