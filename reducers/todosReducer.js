const todosReducer = (state, action) => { // state = todos
    switch(action.type){
        case "ADD_TODO":
            return [...state, action.payload.todo]
        break;
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload.id)
        break;
        case "COMPLETE_TOGGLE_TODO":
            return state.map(todo => todo.id === action.payload.id ? { ...todo, compleate: !todo.compleate } : todo)
        break;
        default:
            return state;
    }
}

export default todosReducer;