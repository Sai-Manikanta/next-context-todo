import { useContext } from 'react'
import TodoItem from "./TodoItem"
import { TodosContext } from '../contexts/TodosContext'

const TodoList = () => {
    const { todos } = useContext(TodosContext);

    return ( 
        <div className="bg-theme-primary p-4 text-gray-200">
           { todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
     );
}
 
export default TodoList;