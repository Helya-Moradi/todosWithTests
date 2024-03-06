function Todo({data, onComplete, onDelete}) {
    return (
        <div className="todo">
            <span
                className={`todoTitle ${data.completed && 'completed'}`}
                onClick={() => {
                    onComplete(data.id)
                }}
            >
              {data.todo}
            </span>

            <span
                className="deleteButton"
                onClick={() => {
                    onDelete(data.id)
                }}>
                Delete
            </span>
        </div>
    )
}

export default Todo;