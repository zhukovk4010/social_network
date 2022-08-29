import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {

    let friendsItem = props.friendsData
        .map(friend => <Friend avatarUrl={friend.avatarUrl} />)

    return (
        <div className={s.friends_container}>
            <h3>Друзья</h3>
            <div className={s.avatars_friends}>
                {friendsItem}
            </div>
        </div>
    )
}

export default Friends;