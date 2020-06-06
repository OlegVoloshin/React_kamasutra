import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map ((p) => <Post message={p.message} id={p.id} 
    likesCount={p.likesCount} /> );

    let newPostElenent = React.createRef();

    let addPost =  () => {   
      debugger;   
      // let text = newPostElenent.current.value;
      props.dispatch({ type: 'ADD-POST' });//фция из state вызфвается после клика на кнопку
    }

  let onPostChange = () => {
    let text = newPostElenent.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });//фция из мира бизнеса(state) и ей передаем новый текст
    //который пользователь хочет передать 
  }

  return (
    <div>
      <h3>My Post</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElenent} value={props.newPostText} />
      </div>
      <div>
        <button onClick={ addPost }>Add post</button>     
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;