import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import StoreContext from '../../../StoreContext';
//Важно, чтобы после <StoreContext.Consumer> тега остальной код начинался с новой строки!
const MyPostsContainer = () => {
  return <StoreContext.Consumer> 
    {(store) => {
      let state = store.getState();
      let addPost = () => {
        store.dispatch(addPostActionCreator());//фция из state вызфвается после клика на кнопку
      }

      let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        store.dispatch(action);
      }
      return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    }
  }
  </StoreContext.Consumer>
}
export default MyPostsContainer;