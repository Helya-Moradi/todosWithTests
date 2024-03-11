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
                id="addInput"
                data-testid="todo-input"
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}/>

            <button
                onClick={addTodo}
                data-testid="button"
                id='addButton'
            >
                Add Todo
            </button>
        </div>
    )
}

export default AddTodo;