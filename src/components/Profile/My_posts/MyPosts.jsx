import React from 'react';
import mypost from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={mypost.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={mypost.posts}>
                <Post message='Hello Bob'/>
                <Post message='Hi Kirill'/>
            </div>
        </div>
    );
}

export default MyPosts;