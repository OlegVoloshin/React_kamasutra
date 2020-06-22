import React from 'react';
import style from './users.module.css';
import * as axios from 'axios';//значит импортируем абсолютно все из axios
import userPhoto from '../../assets/images/image.png'

class Users extends React.Component {//классовая компонента

    // constructor(props){ происходит по умолчанию, можно не писать
    //     super(props);        
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&
        count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
                );
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&
    count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            }
            );
    }
    render() {//вернет нам JSX

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)//округляем в большую сторону чтобы оставшиеся от деления вывести
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        
        return (
            <div>
                <div> 
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && style.selectedPage} //стилим
                            onClick={() => { this.onPageChanged(p); }}>
                            {p}</span>
                    })
                    }
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div></div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={style.usPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}
export default Users;