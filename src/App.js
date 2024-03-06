import './App.css';
import {useState} from "react";
import Todos from "./components/todos";
import AddTodos from "./components/addTodo";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, todo: 'Buy a new book', completed: false},
        {id: 2, todo: 'Programming', completed: false},
        {id: 3, todo: 'Cook', completed: true},
        {id: 4, todo: 'Play', completed: false},
    ])

    return (
        <div className="App">
            <AddTodos todos={todos} setTodos={setTodos}/>
            <Todos todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default App;
