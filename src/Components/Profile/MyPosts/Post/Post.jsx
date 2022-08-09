import s from './Post.module.css';


const Post = (props) => {
    return (
        <div>
            <img className={s.avatar} src='https://sun1-26.userapi.com/impg/1LeET7ZAhxFcWRmncIhJt1LF8glU0EuHDyhqdQ/s25Q0MA9qFc.jpg?size=1546x2160&quality=95&sign=54bb25668197f6e39275e44e1e66195c&type=album' />
                {props.message}
            <div>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}


export default Post;