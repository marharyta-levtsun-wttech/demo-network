import React from "react";
import cl from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div className={cl.content}>
        <Post message="first post" />
        <Post message="second post" />
        <Post message="learning React" />
    </div>
    )
}

export default MyPosts;