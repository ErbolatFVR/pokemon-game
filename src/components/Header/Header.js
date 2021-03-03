import s from './Header.module.css';

const Header = ({title, deskr}) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{deskr}</p>
            </div>
        </header>
    );
}

export default Header;
