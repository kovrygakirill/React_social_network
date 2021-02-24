import React from 'react';
import pfile from './Profile.module.css';
import MyPosts from "./My_posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;