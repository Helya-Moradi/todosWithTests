import {useState} from "react";

function AddTodos({todos, setTodos}) {
    const [inputValue, setInputValue] = useState('');

    const addTodoHandler = () => {
        if (inputValue) {
            const newTodos = [...todos]
            const newTodo = {
                id: todos.length + 1,
                todo: inputValue,
                completed: false
            }

            newTodos.push(newTodo);
            setTodos(newTodos);
            setInputValue('');
        }
    }

    return (
        <div className='addTodo'>
            <input
                type="text" value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}/>

            <button onClick={addTodoHandler}>Add Todo</button>
        </div>
    )
}

export default AddTodos;