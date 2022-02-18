import s from './MyPosts.module.css';


const MyPosts = () => {
    return (
        <section>
            My posts
            <div>
                New posts
                <div className='posts'>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className='item'>
                        post 2
                    </div>
                </div>
            </div>
        </section>
    );
};


export default MyPosts;