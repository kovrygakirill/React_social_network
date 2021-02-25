import React from 'react';
import mypost from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(post =>
        <Post message={post.message} id={post.id} likeCount={post.likeCount}/>
    )

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    };

    let newPostElement = React.createRef();

    return (
        <div className={mypost.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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