import {createStore, combineReducers} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";


let reducers = combineReducers({// обьект состоящий из редьюсеров (нужно воспринимать как наш state), combineReducers фция встроенная в Redux
    profilePage: profileReducer,//свойство profilePage и за него отвечает profileReducer
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);


export default store;