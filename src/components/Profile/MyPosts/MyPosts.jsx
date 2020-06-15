import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  
  let postsElements = props.posts.map((p) => <Post message={p.message} id={p.id}
    likesCount={p.likesCount} />);

  let newPostElenent = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElenent.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div>
      <h3>My Post</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElenent} value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;