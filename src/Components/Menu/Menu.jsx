import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Menu.module.css';


const Menu = (props) => {
    return (
        <nav className={s.menu}>
            <div><NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
            <div><NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink></div>
            <div><NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink></div>
            <div><NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink></div>
            <div><NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink></div>

            <Friends friendsData={props.menuState.friends} />
        </nav>
    )
}


export default Menu;