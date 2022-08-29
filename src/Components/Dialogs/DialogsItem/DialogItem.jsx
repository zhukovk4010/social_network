import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'


const DialogItem = (props) => {
    return (
        <div className={s.dialog_item}>
            <div>
                <img className={s.avatar} src={props.avatarUrl} />
            </div>
            <div className={s.name_container}>
                <NavLink className={s.name_human} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
            </div>
        </div>
    )
}


export default DialogItem;