import Description from "../../components/Description/Description";
import style from './mainpage.module.css'

function MainPage() {
    const props = {title: "Title", description: "description"}
    return (
        <div>
            <h1 className={style.title}>Main Page</h1>
            <Description {...props}/>
        </div>
    );
}

export default MainPage;