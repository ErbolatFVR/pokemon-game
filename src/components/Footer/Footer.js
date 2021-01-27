import style from './Footer.module.css'
function Footer(props) {
    return (
        <footer>
            <div className={style.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    );
}

export default Footer;
