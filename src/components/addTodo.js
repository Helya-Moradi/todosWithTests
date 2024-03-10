import {useState} from "react";

function AddTodo({addTodoHandler}) {
    const [inputValue, setInputValue] = useState('');

    function addTodo(){
        if(inputValue){
            addTodoHandler(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className='addTodo'>
            <input
                data-testid="todo-input"
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}/>

            <button
                onClick={addTodo}
                data-testid="button"
            >
                Add Todo
            </button>
        </div>
    )
}

export default AddTodo;