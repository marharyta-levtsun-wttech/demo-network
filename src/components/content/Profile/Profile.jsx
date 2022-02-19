import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import cl from './Profile.module.css';

const Profile = () => {
    return (
    <div className={cl.content}>
        <div>
            ava+desc
        </div>
        <MyPosts />
    </div>
    )
}

export default Profile;