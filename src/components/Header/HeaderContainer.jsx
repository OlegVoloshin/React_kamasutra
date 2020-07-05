import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth_reducer'
import * as axios from 'axios';//значит импортируем абсолютно все из axios
import Header from './Header';
import {authAPI} from '../../api/api'

class HeaderContainer extends React.Component {//классовая компонента

    

    componentDidMount() {
        
        authAPI.getAuth()
            .then(data => {                
                if(data.resultCode === 0){
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);  
                }
                
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
       isAuth: state.auth.isAuth,
        login: state.auth.login
        //isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);