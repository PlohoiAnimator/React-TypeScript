import { FC } from "react"
import { ITodo } from "../types/types"

interface TodoItemProps {
    todo: ITodo
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    return(
        <div style={{border:'1px solid gray', marginTop:10}}>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    )
}

export default TodoItem