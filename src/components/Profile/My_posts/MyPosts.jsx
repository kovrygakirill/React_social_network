import React from 'react';
import mypost from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsData = [
        {id: 1, message: 'Hello Bob', likeCount: 10},
        {id: 2, message: 'Hi Kirill', likeCount: 12},
    ]

    let postsElements = postsData.map(post =>
        <Post message={post.message} id={post.id} likeCount={post.likeCount}/>
    )

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;