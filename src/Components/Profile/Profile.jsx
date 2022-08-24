import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <section>
            <div className={s.pictures}>
                <img src='https://allthatsinteresting.com/thumb/1200.633.https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/09/interesting-pictures-of-clouds.jpg' />
            </div>

            <ProfileInfo />
            <MyPosts />
        </section>
    )
}


export default Profile;