import Todo from "./todo";

function Todos({todos, setTodos}) {

    const completeHandler = (id) => {
        const newTodos = [...todos];

        const findTodo = newTodos.find(todo => todo.id === id);
        findTodo.completed = !findTodo.completed;

        setTodos(newTodos);
    }

    const deleteHandler = (id) => {
        const newTodos = [...todos];

        const filteredTodo = newTodos.filter(todo => todo.id !== id);

        setTodos(filteredTodo);
    }

    return (
        <div className="todos">
            {
                todos.map((todo, index) => (
                    <Todo
                        data={todo}
                        key={`todo-${index + 1}`}
                        onComplete={completeHandler}
                        onDelete={deleteHandler}
                    />
                ))
            }
        </div>
    )
}

export default Todos;