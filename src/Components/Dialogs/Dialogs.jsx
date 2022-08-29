import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem'
import Message from './Message/Message'




//Диалоги
const Dialogs = (props) => {



    let dialogsElements = props.dialogsState.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = props.dialogsState.messages
        .map(message => <Message text={message.message} />)



    return (
        <section className={s.dialogs}>
            <div className={s.dialogs_items}>
                {/* Список пользователей */}
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </section>
    )
}

export default Dialogs;