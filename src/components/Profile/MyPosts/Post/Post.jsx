import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQq5sYtnxd_ebniVTogN3odFCR4p0vjKMz1vTEcVvHOoLmjI_xz&usqp=CAU'></img>
        {props.message}

      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;