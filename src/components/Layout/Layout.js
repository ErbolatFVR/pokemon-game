import style from './Layout.module.css'

const Layout = ({id, title, descr, bgColor, bgImage}) => {
return (
        <section className={style.root} id={Layout} style={{backgroundImage: bgImage ? `url(${bgImage})` : 'none',
            backgroundColor: bgColor}}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                    </div>
                    <div className={style.desc + ' ' + style.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
export default Layout;
