import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTask } from "../features/tasks/taskSlice"
const TasksList = () => {

    const dispatch = useDispatch()

    const tasks = useSelector(state => state.tasks)

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <header>
                <h2>Tareas {tasks.length}</h2>
                <Link to="/create-task">Nueva Tarea</Link>
            </header>
            {
                tasks.map( task => (
                    <div key={task.id}>
                        <h3>{ task.title }</h3>
                        <p>{ task.description }</p>
                        <button onClick={ () => handleDelete(task.id) }>Eliminar</button>
                        <Link to={`/edit-task/${task.id}`}>Editar</Link>
                    </div>
                ) )
            }
        </div>
    )
}

export default TasksList