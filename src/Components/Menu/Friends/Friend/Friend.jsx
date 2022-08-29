import s from './../Friends.module.css';

const Friend = (props) => {
    return (
        <div>
            <a href="">
                <img className={s.avatar} src={props.avatarUrl} />
            </a>
        </div>
    )
}

export default Friend;