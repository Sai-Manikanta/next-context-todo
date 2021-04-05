import { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContext'

const Header = () => {
    const { todos } = useContext(TodosContext);

    return ( 
        <header className="bg-theme-secondary text-gray-200 p-4 text-center">
            <h1 className="text-2xl font-extrabold tracking-wide">Next Context Todo App</h1>
            <p className="mt-3 text-sm">Currently you have { todos.length } books to get through...</p>
        </header>
     );
}
 
export default Header;