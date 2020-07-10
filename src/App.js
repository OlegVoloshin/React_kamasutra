import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



const App = (props) => {
  
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' //? значит что userId опционален,его может и не быть
        render={() => <ProfileContainer />} />
        <Route exact path='/dialogs' 
        render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/friends' render={() => <Friends />} />
        <Route path='/users' render={() => <UsersContainer />} /> 
        <Route path='/login' render={() => <Login />} /> 
      </div>
    </div>

  )
}
export default App;