import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div>
            <div className={`${s.content} ${s.pictures}`}>
                <img src='https://kiyavia.com/files/travel-provider/plyag-ukraine/beach_1920_2-min.jpg' />
            </div>
            <section className={s.user_information}>
                <div className={s.avatar}>
                    <img src="https://sun9-18.userapi.com/impf/c847124/v847124434/d6c85/Gdd0E2ghSkA.jpg?size=2048x2045&quality=96&sign=fd1ca62ea005fa0667964bdc73d8ff5c&type=album" />
                </div>
                <div className='personal_data'>
                    <div>Жуков Кирилл</div>
                    <div>Дата рождения: 19.05.1999</div>
                    <div>Город: Подольск</div>
                    <div>Образование: МИИГАиК</div>
                    <div>Сайт:vk.com/zhukovk4010</div>
                </div>
            </section>
            <MyPosts />
        </div>
    );
};


export default Profile;