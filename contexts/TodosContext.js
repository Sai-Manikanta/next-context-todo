import { createContext, useReducer } from 'react';

import todoReducer from '../reducers/todosReducer';

export const TodosContext =  createContext();

const TodosContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return ( 
        <TodosContext.Provider value={{ todos, dispatch }}>
            { children }
        </TodosContext.Provider>
     );
}
 
export default TodosContextProvider;