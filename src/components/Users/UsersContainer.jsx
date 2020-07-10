import React from 'react';
import { connect } from 'react-redux';
import { getUsers, toggleIsFollowingProgress, follow, unfollow, setCurrentPage } from '../../redux/users_reducer'
import Users from './Users'
import Preloader from '../common/preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class UsersContainer extends React.Component {//классовая компонента

    // constructor(props){ происходит по умолчанию, можно не писать
    //     super(props);        
    // }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        
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
            followingInProgress={this.props.followingInProgress }
             />
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
let AuthRedirect = withAuthRedirect(UsersContainer) 
export default connect(mapStateToProps, {follow, unfollow,
    setCurrentPage, toggleIsFollowingProgress, getUsers}) (AuthRedirect);