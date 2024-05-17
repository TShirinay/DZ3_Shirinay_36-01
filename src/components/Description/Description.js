import style from './description.module.css'

function Description({title, description}) {
    return (
        <div>
            <h2 className={style.title}>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Description;