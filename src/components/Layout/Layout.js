import style from './Layout.module.css'

const Layout = ({id, title,  bgColor, bgImage, children }) => {
    const sectionStyle={};
    if (bgImage) {
        sectionStyle.backgroundImage=`url(${bgImage})`;
    }
    if (bgColor) {
        sectionStyle.backgroundColor=bgColor;
    }
return (
        <section className={style.root} id={id} style={sectionStyle}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                    </div>
                    <div className={style.desc + ' ' + style.full}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}
export default Layout;
