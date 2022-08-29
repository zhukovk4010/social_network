import React from 'react';
import s from './MyPosts.module.css';

import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElemetns = props.postData
        .map(post => <Post message={post.message} likes={post.likes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.my_post_wrapper}>
            My posts
            <div>
                <textarea ref={newPostElement} ></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add comment</button>
            </div>

            {postsElemetns}
        </div>
    )
}


export default MyPosts;