import React from 'react';
import post from './Post.module.css';

const Post = () => {
    return (
        <div className={post.item}>
            <img
                src='https://thumbs-prod.si-cdn.com/aH6F4gbRLOH0WrjHthkO_mnqseQ=/fit-in/1600x0/https://public-media.si-cdn.com/filer/a9/ff/a9ff31d0-aecd-464e-80c7-873e4651cd2b/mufasa.jpeg'/>
            post 1
            <div>
                <span>Like</span>
                <span> Dislike</span>
            </div>
        </div>
    );
}

export default Post;