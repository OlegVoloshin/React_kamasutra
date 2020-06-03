import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map ((p) => <Post message={p.message} id={p.id} 
    likesCount={p.likesCount} /> );

    let newPostElenent = React.createRef();

    let addPost =  () => {
      
      let text = newPostElenent.current.value;
      props.addPost(text)
    };

  return (
    <div>
      <h3>My Post</h3>
      <div>
        <textarea ref={newPostElenent}></textarea>
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