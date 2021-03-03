import React from 'react';
import mypost from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.profilePage.postsData.map(post =>
        <Post message={post.message} id={post.id} likeCount={post.likeCount}/>
    )

    let addPost = () => {
        props.addPost()
    };

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    };

    return (
        <div className={mypost.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={mypost.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;