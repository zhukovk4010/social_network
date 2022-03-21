import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.profile}`}>
                <NavLink to='Profile' className = { (navData) => navData.isActive ? s.active : '' }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='Dialogs' className = { (navData) => navData.isActive ? s.active : '' }>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='News' className = { (navData) => navData.isActive ? s.active : '' }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='Music' className = { (navData) => navData.isActive ? s.active : '' }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='Settings' className = { (navData) => navData.isActive ? s.active : '' }>Settings</NavLink>
            </div>
        </nav>
    );
};


export default Nav;