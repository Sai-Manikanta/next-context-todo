import { useRef, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext'
import { v4 as uuidv4 } from 'uuid';

const TodoAddForm = () => {
    const { dispatch } = useContext(TodosContext);

    const taskInputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const task = taskInputRef.current.value;
        const todo = { id: uuidv4(), task, compleate: false };

        dispatch({
            type: 'ADD_TODO',
            payload: {
                todo: todo
            }
        })

        taskInputRef.current.value = "";
    }
    return ( 
        <form onSubmit={handleSubmit} className="bg-theme-primary px-4 pb-4">
            <input type="text" className="w-full bg-theme-tertiary outline-none text-gray-300 rounded p-1" placeholder="Todo task" ref={taskInputRef} />
            <button className="mt-4 bg-gray-300 px-4 py-1 text-sm rounded-sm block mx-auto">add book</button>
        </form>
     );
}
 
export default TodoAddForm;