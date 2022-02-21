import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://sun9-20.userapi.com/impf/cq67c9JZwM6J7HVy-BdQRqOdeS551A3h0FCzGQ/NolykTfwFEA.jpg?size=604x604&quality=96&sign=0258635557fc770a7c866f994fe4f97e&type=album' />
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    )
};


export default Post;