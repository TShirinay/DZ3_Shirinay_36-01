import Description from "../../components/Description/Description";
import style from './aboutpage.module.css'

function AboutPage() {
    const props =  {title: "Title 2", description: "description 2"}
    return (
        <div>
            <h1 className={style.title}>About Page</h1>
            <Description{...props}/>
        </div>
    );
}

export default AboutPage;