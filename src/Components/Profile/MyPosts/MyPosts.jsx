import s from './MyPosts.module.css';

import Post from "./Post/Post";


const MyPosts = () => {

    let postData = [
        { id: 1, message: 'Где деньги, Лебовски?', likes: 20 },
        { id: 2, message: 'Займи косарь', likes: 23 }
    ]

    return (
        <div className={s.my_post_wrapper}>
            My posts
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add comment</button>
            </div>

            <Post message={postData[0].message} likes={postData[0].likes} />
            <Post message={postData[1].message} likes={postData[1].likes} />
        </div>
    )
}


export default MyPosts;