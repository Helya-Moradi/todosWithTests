function Todo({todo, completeTodoHandler, deleteTodoHandler}) {
    return (
        <div className="todo">
            <span
                className={`todoTitle ${todo.completed && 'completed'}`}
                onClick={() => {
                    completeTodoHandler(todo.id)
                }}
            >
              {todo.todo}
            </span>

            <span
                data-testid='delete'
                className="deleteButton"
                onClick={() => {
                    deleteTodoHandler(todo.id)
                }}>
                Delete
            </span>
        </div>
    )
}

export default Todo;