import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';//значит импортируем абсолютно все из axios
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {

    componentDidMount() {//все side эффекты делаются в методе жизненного цикла обьекта созданного в нашем классе
        
        let userId = this.props.match.params.userId;
        if(!userId) {userId = 2}// если в url не введем ни какого userId то по дефолту будет 2

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                    this.props.setUserProfile(response.data)//ответ пришел в data, сэтаем его в редьюсер                
            });

    }

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} />
            //раскукожили ...this.props и передаем входные props дальше в компоненту Profile и так же передаем из state уже засетаный profile
        )
    }
}

let mapStateToProps = (state) => ({//скобки означает что возвращаем обьект а не фцию
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);