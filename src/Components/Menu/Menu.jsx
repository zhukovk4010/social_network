import s from './Menu.module.css';


const Menu = () => {
    return (
        <nav className={s.menu}>
            <div className={`${s.item} ${s.active}`}><a src='#s'>Profile</a></div>
            <div className={s.item}><a src='#s'>Messages</a></div>
            <div className={s.item}><a src='#s'>News</a></div>
            <div className={s.item}><a src='#s'>Music</a></div>
            <div className={s.item}><a src='#s'>Settings</a></div>
        </nav>
    )
}


export default Menu;