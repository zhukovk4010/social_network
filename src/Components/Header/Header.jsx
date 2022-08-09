import s from './Header.module.css';


const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://download.blender.org/branding/community/blender_community_badge_black.png' />
        </header>
    )
}


export default Header;