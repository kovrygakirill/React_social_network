import React from 'react';
import mypost from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={mypost.posts}>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;