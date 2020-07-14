import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect =(Component) => {

    class RedirectComponent extends React.Component {//можно классовую компоненту можно функциональную
        render() {
            if(!this.props.isAuth) return <Redirect to="/login" />
            return <Component {...this.props} />
        }
    }
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect) (RedirectComponent)
    //обернули наш шаблон (class RedirectComponent) connect, чтобы всегда прокидывать isAuth: state.auth.isAuth
    return ConnectedAuthRedirectComponent;
}

//тут мы не отрисовываем компонету это просто шаблон