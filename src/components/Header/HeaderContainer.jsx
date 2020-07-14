import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, authThunkCreator } from '../../redux/auth_reducer'
import Header from './Header';
import { compose } from 'redux';

class HeaderContainer extends React.Component {//классовая компонента  
    componentDidMount() {             
        this.props.authThunkCreator();
    }        
    render() {
       
        return  <Header {...this.props} />
       
    }
}

let mapStateToProps = (state) => {//передаем state
    return {
       isAuth: state.auth.isAuth,
        login: state.auth.login
    } 
}

export default compose(
    connect(mapStateToProps, {setAuthUserData, authThunkCreator})
    ) (HeaderContainer);