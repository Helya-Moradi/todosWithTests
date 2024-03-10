import './App.css';
import {useState} from "react";
import Todos from "./components/todos";
import AddTodo from "./components/addTodo";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, todo: 'Buy a new book', completed: false},
        {id: 2, todo: 'Programming', completed: false},
        {id: 3, todo: 'Cook', completed: true},
        {id: 4, todo: 'Play', completed: false},
    ])

    const addTodoHandler = (input) => {
        const newTodos = [...todos]

        const newTodo = {
            id: todos.length + 1,
            todo: input,
            completed: false
        }

        newTodos.push(newTodo);
        setTodos(newTodos);
    }

    const completeTodoHandler = (id) => {
        const newTodos = [...todos];

        const findTodo = newTodos.find(todo => todo.id === id);
        findTodo.completed = !findTodo.completed;

        setTodos(newTodos);
    }

    const deleteTodoHandler = (id) => {
        const newTodos = [...todos];

        const filteredTodo = newTodos.filter(todo => todo.id !== id);

        setTodos(filteredTodo);
    }

    return (
        <div className="App">
            <AddTodo addTodoHandler={addTodoHandler}/>

            <Todos
                todos={todos}
                completeTodoHandler={completeTodoHandler}
                deleteTodoHandler={deleteTodoHandler}
            />
        </div>
    );
}

export default App;
