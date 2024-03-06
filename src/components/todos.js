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
                    <div className="todo" key={`todo-${index + 1}`}>
                        <span
                            className={`todoTitle ${todo.completed && 'completed'}`}
                            onClick={() => {
                                completeHandler(todo.id)
                            }}
                        >
                          {todo.todo}
                        </span>

                        <span
                            className="deleteButton"
                            onClick={() => {
                                deleteHandler(todo.id)
                            }}>
                            Delete
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Todos;