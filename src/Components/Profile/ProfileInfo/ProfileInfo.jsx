import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <section className={s.profile_info_wrapper}>
            <div>
                avatar
            </div>
            <div>
                descriptions
            </div>
        </section>
    )
}


export default ProfileInfo;