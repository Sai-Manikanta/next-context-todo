# Next Context Todo

In this project iam implemented react context api for global state.

**Todos State** globally available through context api.
this state is used by components:

- Header (to show count of todods)
- TodoList (to show all todos)
- TodoItem (todo item component is individual todo, and delete todo when we click on component)
- TodoAddForm (To create new todo)

## Todo State

it provides read, delete, add, update functionality of todos state provides globally. all crud operations are grouped in useReducer() hook instead of supparately maintain functions for each individual action passing needed components, we just pass `dispatch()` function and controlling action through *action object*. 
