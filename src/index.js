import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';

 let renderEntireTree = (state) => {
     debugger;
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
                {/* state - обьект, а dispatch - это callbackи */}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    ) 
};
renderEntireTree(store.getState()); 

store.subscribe(() => {
    let state = store.getState();//после измениения стейт уведомляем подписчика и снова берем новый стейт и рендерим EntireTree с новым стейтом
    renderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();