import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <section>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                New posts
                <div className='posts'>
                    <Post message='Займи сотку' like='20 &hearts;' />
                    <Post message='Привет' like='15 &hearts;' />
                </div>
            </div>
        </section>
    );
};


export default MyPosts;