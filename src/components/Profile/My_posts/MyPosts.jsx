import React from 'react';
import mypost from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={mypost.posts}>
                <Post message='Hello Bob'/>
                <Post message='Hi Kirill'/>
            </div>
        </div>
    );
}

export default MyPosts;