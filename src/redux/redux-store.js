import {createStore, combineReducers} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";


let reducers = combineReducers({ 
    // обьект состоящий из редьюсеров (нужно воспринимать как наш state), combineReducers фция встроенная в Redux (коллекция редьюсеров)
    profilePage: profileReducer, 
    //свойство profilePage и за него отвечает profileReducer
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;// чтобы в консоле хрома проверять меняется store или нет
export default store;