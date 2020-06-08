import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import { addPost } from './redux/State';



const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile'
          render={() => <Profile profilePage={props.state.profilePage}
           dispatch={props.dispatch} />} />
        <Route exact path='/dialogs'
          render={() => <Dialogs store={props.store} />} />
        {/*exact указывает что только /dialogs путь вызывает компоненту Dialogs  */}
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/friends' component={Friends} />
      </div>
    </div>

  )
}
export default App;