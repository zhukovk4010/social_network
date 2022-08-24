import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}


//Диалоги
const Dialogs = (props) => {

    let dialogData = [
        { id: 1, name: 'Alina' },
        { id: 2, name: 'Vildan' },
        { id: 3, name: 'Matvey' },
        { id: 4, name: 'Isma' },
        { id: 5, name: 'Vadik' },
    ]

    let messageData = [
        { id: 1, message: 'Привет', },
        { id: 1, message: 'Как дела?', },
        { id: 1, message: 'я нарик', },
        { id: 1, message: 'верни бабки', }
    ]

    return (
        <section className={s.dialogs}>
            <div className={s.dialogs_items}>

                {/* Список пользователей */}
                <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                <DialogItem name={dialogData[1].name} id={dialogData[2].id} />
                <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
                <DialogItem name={dialogData[3].name} id={dialogData[4].id} />
                <DialogItem name={dialogData[4].name} id={dialogData[4].id} />

            </div>

            <div className={s.messages}>
                <Message text={messageData[0].message} />
                <Message text={messageData[1].message} />
                <Message text={messageData[2].message} />
                <Message text={messageData[3].message} />
            </div>
        </section>
    )
}

export default Dialogs;