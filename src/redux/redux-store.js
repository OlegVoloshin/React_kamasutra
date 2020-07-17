import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";


let reducers = combineReducers({ 
    // обьект состоящий из редьюсеров (нужно воспринимать как наш state), combineReducers фция встроенная в Redux (коллекция редьюсеров)
    profilePage: profileReducer, 
    //свойство profilePage и за него отвечает profileReducer
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;// чтобы в консоле хрома проверять меняется store или нет
export default store;