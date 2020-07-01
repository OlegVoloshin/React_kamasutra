import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth_reducer'
import * as axios from 'axios';//значит импортируем абсолютно все из axios
import Header from './Header';

class HeaderContainer extends React.Component {//классовая компонента

    

    componentDidMount() {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => {
                this.props.setAuthUserData
            });
    }
    
    render() {

        return <>
        <Header {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {//передаем state
    return {
        userID: state.auth.userID,
        email: state.auth.email,
        login: state.auth.login
        //isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);