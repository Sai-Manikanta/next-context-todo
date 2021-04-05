import { useContext } from 'react';

import { TodosContext } from '../contexts/TodosContext'

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodosContext);
    
    const handleDelete = (todoId) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: {
                id: todoId
            }
        });
    }

    return ( 
        <div onClick={() => handleDelete(todo.id)} className="group cursor-pointer bg-theme-secondary rounded p-2 mb-3">
            <h4 className="group-hover:line-through font-bold">{ todo.task }</h4>
        </div> 
     );
}
 
export default TodoItem;