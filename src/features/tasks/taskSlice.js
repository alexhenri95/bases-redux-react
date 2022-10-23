import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: "1",
        title: "Aprender Redux",
        description: "Realizar proyecto de tareas.",
        complete: false
    },
    {
        id: "2",
        title: "Aprender Typescript",
        description: "Realizar proyecto con typescript.",
        complete: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            return [ action.payload, ...state ]
        },
        deleteTask: (state, action) => {
            return state.filter(stateTask => stateTask.id !== action.payload)
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload

            return state.map( stateTask =>
                ( stateTask.id === id ) ? { ...stateTask, title, description } : stateTask    
            )
        }
    }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer