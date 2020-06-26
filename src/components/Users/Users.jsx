import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/image.png'


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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                            className={style.usPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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