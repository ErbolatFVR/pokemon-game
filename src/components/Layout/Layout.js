import style from './Layout.module.css'

const Layout = ({id, title, descr, urlBg, colorBg}) => {
    return (
        <section className={style.root} id={Layout} style={backgroundImage:url({bg1})}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>
                            {title}
                        </h3>
                        <span
                            className={style.desc + ' ' + style.full}
                        />
                    </div>
                    <div className={style.desc + ' ' + style.full}>
                        <p>
                            {descr}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}
export default Layout;
