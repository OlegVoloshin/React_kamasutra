import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/image.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';//значит импортируем абсолютно все из axios
 


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)//округляем в большую сторону чтобы оставшиеся от деления вывести
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage} //стилим
                        onClick={() => { props.onPageChanged(p); }}>
                        {p}</span>
                })
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div></div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={style.usPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => { 
                                props.toggleIsFollowingProgress(true);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {withCredentials: true,
                                headers: {
                                    "API-KEY": "b0d850c7-e22f-4639-a8a1-c7d829ee7d36"
                                }})
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false);
                                    });
                                 }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {withCredentials: true,// для авторизированного пользователя
                                    headers: {//для кросс-доменного запроса, запрос идет с локалхост на аpi и сервак требует ключ на изменение                                        
                                        "API-KEY": "b0d850c7-e22f-4639-a8a1-c7d829ee7d36"
                                    }})
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false);
                                    });
                                    
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
}


export default Users;