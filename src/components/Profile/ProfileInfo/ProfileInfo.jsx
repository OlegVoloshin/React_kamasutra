import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile) {//проверка нужна чтобы пока не придет ответ с аякс запроса крутилась крутилка, иначе значение profile == null
        return <Preloader />
    }
    
    return (
        <div>
            <div>
                <img src="https://image.freepik.com/free-vector/_8169-228.jpg"></img>
            </div>

            <div>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>

    );
}

export default ProfileInfo;
            