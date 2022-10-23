import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from 'react-router-dom'
import { addTask, editTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"

const TasksForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const tasks = useSelector(state => state.tasks)

    const [ task, setTask ] = useState({
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (params.id) {
            dispatch(editTask(task))
        }else{
            dispatch(addTask({
                ...task,
                id: uuid(),
                completado: false
            }))
        }

        navigate('/')
    }

    useEffect(() => {
        if (params.id) {
            const taskFound = tasks.find(task => task.id === params.id)
            setTask(taskFound)
        }
    }, [])

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" name="title" value={task.title} placeholder="Titulo" onChange={ handleChange } />
            <textarea name="description" value={task.description} placeholder="Descripción" onChange={handleChange}></textarea>
            <button type="submit">Guardar</button>
        </form>
    )
}

export default TasksForm