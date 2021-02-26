import s from './Layout.module.css'

const Layout = ({id, title,  bgColor, bgImage, children }) => {
    const sectionStyle={};
    if (bgImage) {
        sectionStyle.backgroundImage=`url(${bgImage})`;
    }
    if (bgColor) {
        sectionStyle.backgroundColor=bgColor;
    }
return (
        <section className={s.root} id={id} style={sectionStyle}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Layout;
