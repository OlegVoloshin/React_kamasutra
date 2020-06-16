import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';



const App = (props) => {
  
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile />} />
        <Route exact path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/friends' component={Friends} />
        <Route path='/users'
          render={() => <Users />} /> 
      </div>
    </div>

  )
}
export default App;