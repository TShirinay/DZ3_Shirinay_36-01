import Todo from "../../components/Todo/Todo";
import style from './todospage.module.css'

function TodosPage() {
    const todos =  ["todo 1", "todo 2", "todo 3"]
    return (
        <div>
            <h1 className={style.title}>Todos page</h1>
            {
                todos.map((item, index) => (
                    <Todo key = {index} todo = {item}/>
                ))
            }
        </div>
    );
}

export default TodosPage;