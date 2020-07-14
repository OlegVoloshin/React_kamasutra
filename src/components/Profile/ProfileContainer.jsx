import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile_reducer'
import { withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {userId = 9065}// если в url не введем ни какого userId то по дефолту будет профиль мой (зареганый профиль)
        this.props.getUserProfile(userId);   
        this.props.getStatus(userId);     
    }
    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus} />
            //раскукожили ...this.props и передаем входные props дальше в компоненту Profile и так же передаем из state уже засетаный profile
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
    
})


export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
   // withAuthRedirect
) (ProfileContainer)