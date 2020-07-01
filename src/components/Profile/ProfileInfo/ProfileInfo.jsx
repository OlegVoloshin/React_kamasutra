import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import smile from '../../../assets/images/smile.png';
import sad from '../../../assets/images/sad.png'


const ProfileInfo = (props) => {
    if(!props.profile) {//проверка нужна чтобы пока не придет ответ с аякс запроса крутилась крутилка, иначе значение profile == null
        return <Preloader />
    }
    
    return (
        <div>            
            <div>
                <img src={props.profile.photos.large} />
            </div>
            <div>
                <ul>
                    <li>Full name: {props.profile.fullName}</li>
                    <li>About Me: {props.profile.aboutMe}</li>
                    <li>Contacts: 
                        <li><a href="#">{props.profile.contacts.facebook}</a></li>
                        <li><a href="#">{props.profile.contacts.website!= null ? props.profile.contacts.website : null }</a></li>
                        <li><a href="#">{props.profile.contacts.vk}</a></li>
                        <li><a href="#">{props.profile.contacts.twitter}</a></li>
                        <li><a href="#">{props.profile.contacts.instagram}</a></li>
                        <li><a href="#">{props.profile.contacts.github}</a></li>
                        <li><a href="#">{props.profile.contacts.youtube!= null ? props.profile.contacts.youtube : null }</a></li>
                    </li>
                    <li>Working status: {props.profile.lookingForAJob? <img src={smile} className={s.job} /> : <img src={sad} className={s.job} />}</li>
                    <li>Looking for a job: {props.profile.lookingForAJobDescription!= null ? props.profile.lookingForAJobDescription : <span>I have no job</span> }</li>
                </ul>
               
            </div>
            
        </div>

    );
}

export default ProfileInfo;
            