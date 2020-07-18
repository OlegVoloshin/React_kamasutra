import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"LOGIN"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"PASSWORD"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field type={"checkbox"}  name={"rememberMe"} component={"input"}  />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

}

const LoginReduxForm = reduxForm({form: 'login'// уникальное название формы
}) (LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {//formData все значения из формы
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}  />
    </div>
}

export default Login;