import React from "react";
import cl from './Profile.module.css';

const Profile = () => {
    return (
    <div className={cl.content}>
        <div>
            ava+desc
        </div>
        <div>
            My posts
        </div>
        <div>
            New Post
        </div>
        <div>
            List of posts
        </div>
    </div>
    )
}

export default Profile;