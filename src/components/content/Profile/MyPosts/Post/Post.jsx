import React from "react";
import cl from './Post.module.css';

const Post = (props) => {
    return (
    <div className={cl.content}>
        <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="" /> <span>{props.message}</span>
    </div>
    )
}

export default Post;