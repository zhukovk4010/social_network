// import s from './MyPostsx.module.css';

import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts

            <textarea></textarea>
            <button>Add comment</button>

            <Post message='Где деньги, Лебовски?' likes='20' />
            <Post message='Займи косарь' likes='23' />
        </div>
    )
}


export default MyPosts;